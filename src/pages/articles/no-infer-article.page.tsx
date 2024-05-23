import { CodeEditor, Typography } from "@/components";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>No Infer</h1>

      <h2>What problem does NoInfer solve</h2>

      <p>
        Imagine you are writing a function that accepts an object as an argument with two key-value
        pairs; allPossibleValues which is an array and the value which is an item within the array.
      </p>

      <CodeEditor height={20}>{`function someFn(x: { 
  allPossibleValues: string[]; 
  value: string;
}) {/*logic here*/}

// Would be nice if this errors
someFn({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour" });`}</CodeEditor>

      <p>It would be nice if the above code errors, but how do we make this happen?</p>

      <h2>The current solution</h2>
      <p>
        Logically, it would seem like this may be fixed by using a generic type and allowing
        TypeScript to infer the type of value from allPossibleValues.
      </p>

      <CodeEditor height={25}>{`function someFn1<T>(x: { 
  allPossibleValues: T[]; 
  value: T; 
}) {/*logic here*/}

// Unfortunately this doesn't give the error
someFn1({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour" });

// In order to get the error we need to specify the generic
someFn1<"hi" | "bye" | "cry">({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour" });`}</CodeEditor>

      <p>
        One alternative to the above solution is to provide two generics where one extends the
        other. It's slightly less verbose and is more "DRY", but is considered bad practice and is a
        little confusing.
      </p>
      <CodeEditor height={20}>
        {`function someFn2<T1 extends string, T2 extends T1>(x: {
  allPossibleValues: T1[];
  value: T2;
}) {/*logic here*/}

// Errors but bad practice and could get particularly complex if more than two
someFn2({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour" });`}
      </CodeEditor>

      <h2>The current solution explained</h2>
      <p>
        Why can't TypeScript just infer the value from the first generic attempt with someFn1? Put
        simply, if you use one generic to type more than one value, TypeScript doesn't know which
        value to use for the generic.
      </p>
      <p>
        This is explained clearly in the excellent "zustand" state management documentation, but to
        summarise... The problem is that the generic T is invariant - this means that the compiler
        doesn't know whether to infer T from T[] or T[] from T. As a consequence it just gives up
        and the generic doesn't offer any real value. You can read more about it in the docs under
        the{" "}
        <a href="https://docs.pmnd.rs/zustand/guides/typescript#basic-usage">
          "Why can't we simply infer the type from the initial state?"
        </a>{" "}
        section.
      </p>

      <h2>How does NoInfer solve this?</h2>
      <p>
        NoInfer is a helpful new utility type released in TypeScript 5.4 that deals with this common
        use-case and enables code to be written more succinctly and clearly, by telling the compiler
        which generic to focus it's initial inference on, then subsequent generics are inferred from
        the initial reference. Just follow the example below;
      </p>

      <div className="hidden">
        <CodeEditor height={0}>{`type NoInfer<T> = T & { [K in keyof T]: T[K] };`}</CodeEditor>
      </div>
      <CodeEditor height={25}>{`function someFn3<T1 extends string>(x: { 
  allPossibleValues: T1[]; 
  value: NoInfer<T1> 
}) {/*logic here*/}
someFn3({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour" });

function someFn4<T1 extends string>(x: {
  allPossibleValues: T1[];
  value: NoInfer<T1>;
  value2: NoInfer<T1>;
}) {/*logic here*/}
someFn4({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour", value2: "olah" });
`}</CodeEditor>
      <p>
        As is shown in someFn3 & someFn4, if a generic is used more than once, all but one should be
        wrapped with the NoInfer utility type.
      </p>
    </Typography>
  );
}

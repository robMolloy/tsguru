import { CodeBlock, CodeEditor, Typography } from "@/components";

export default function Page() {
  return (
    <div>
      <Typography>
        <h1>No Infer</h1>

        <h2>What problem does NoInfer solve</h2>
        {/* 
        <p>
          No infer is a poweful new utility class released in TypeScript 5.4 that deals with a
          common TypeScript use-case and enables code to be written much more succinctly.
        </p> */}

        <p>
          Imagine you are writing a function that accepts an object as argument with two key-value
          pairs; allPossibleValues which is an array and the value which is an item within the
          array.
        </p>

        <CodeEditor height={15}>{`function someFn(x: { 
  allPossibleValues: string[]; 
  value: string;
}) {/*logic here*/}

someFn({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour" });`}</CodeEditor>

        <p>It would be nice if the above code errors, but how do we make this happen?</p>

        <h2>The current solution</h2>
        <p>
          Logically, it would seem like this may be fixed by using a generic type and allowing
          TypeScript to infer the type of value from allPossibleValues.
        </p>

        <CodeEditor height={20}>{`function someFn1<T>(x: { 
  allPossibleValues: T[]; 
  value: T; 
}) {/*logic here*/}

// Unfortunately this doesn't give the error
someFn1({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour" });

// In order to get the error we need to specify the generic
someFn1<"hi" | "bye" | "cry">({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour" });`}</CodeEditor>

        <p>
          One alternative to the above solution is to provide two generics where one extends the
          other. It's slightly less verbose and is more "DRY", but is considered bad practice and is
          a little confusing.
        </p>
        <CodeEditor height={20}>
          {`function someFn1<T1 extends string, T2 extends T1>(x: {
  allPossibleValues: T1[];
  value: T2;
}) {/*logic here*/}
someFn1({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour" });`}
        </CodeEditor>

        <h2>The current solution explained</h2>
        <p>
          Why can't TypeScript just infer the value from the first attempt? Put simply, if you use
          one generic to type more than one value, TypeScript doesn't know which value to use for
          the generic.
        </p>
        <p>
          This is explained clearly in the excellent "zustand" state management documentation, but
          to summarise... The problem is that the generic T is invariant - this means that the
          compiler doesn't know whether to infer T from T[] or T[] from T. As a consequence it just
          gives up and the generic doesn't offer any real value. You can read more about it in the
          docs under the{" "}
          <a href="https://docs.pmnd.rs/zustand/guides/typescript#basic-usage">
            "Why can't we simply infer the type from the initial state?"
          </a>{" "}
          section.
        </p>
      </Typography>

      <h2>How does NoInfer solve this?</h2>
      <p></p>
    </div>
  );
}

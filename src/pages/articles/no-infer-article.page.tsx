import { CodeBlock, Typography } from "@/components";

export default function Page() {
  return (
    <div>
      <Typography>
        <h1>No Infer</h1>
        <p>
          No infer is a poweful new utility class released in TypeScript 5.4 that deals with a
          common TypeScript use-case and enables code to be written much more succinctly.
        </p>

        <p>
          Imagine you are writing a function that accepts one argument, which is an object made up
          of two key-value pairs; allPossibleValues which is an array and the value which is an item
          within the array.
        </p>

        <CodeBlock>{`function someFn(x: { allPossibleValues: string[]; value: string }) {
  // ...
}
someFn({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour" });`}</CodeBlock>

        <p>
          It would be nice if this code errors, there are a couple of common ways to solve this;
        </p>
      </Typography>
    </div>
  );
}

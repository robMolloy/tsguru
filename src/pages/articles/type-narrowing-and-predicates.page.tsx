import { CodeBlock, CodeEditor, Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Type Narrowing & Predicates</h1>

      <h2>Intro</h2>
      <p>
        TypeScript 5.5 released a new feature that makes type narrowing easier when using type
        predicates. Let's look at how both are used.
      </p>

      <h2>What is Type Narrowing?</h2>
      <p>
        Type narrowing is a way to inform the TypeScript compiler about a variable's type if it is
        unknown or has unknown properties. This ensures errors are being shown appropriately and
        allows for things like auto-completion. For example;
      </p>

      <CodeEditor height={30}>{`function someValue(value: unknown){
  if (typeof value === 'string') {
    // TypeScript knows value is a string here
    console.log(value.toUpperCase()); 
  } else if (typeof value === 'number') {
    // TypeScript knows value is a number here
    console.log(value.toFixed(2)); 
  } else if (typeof value === 'object' && "key" in value && typeof value.key === 'string') {
    // TypeScript knows value is an object where the property "key" has a value of string here
    console.log(value.key.toUpperCase()); 
  }
  // TypeScript doesn't know about the type of value so gives an error
  console.log(value.key.toUpperCase()); 
}`}</CodeEditor>

      <p>
        As can be seen above, by performing the right checks TypeScript will know when ands when not
        to error.
      </p>

      <h2>What is a Type Predicate?</h2>
      <p>
        Type predicates are a way of type narrowing using a function. You can move the type check
        from within the if statement. Before TypeScript 5.5 you need to provide a return value as
        shown below;
      </p>
      <CodeEditor height={50}>{`function isString(value: unknown): value is string {
  return typeof value === 'string';
}
function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}
function isObjectWithStringKeyValue(value: unknown): value is {key: string} {
  return typeof value === 'object' && "key" in value && typeof value.key === 'string';
}

function someValue2(value: unknown){
  if (isString(value)) {
    // TypeScript knows value is a string here
    console.log(value.toUpperCase()); 
  } else if (isNumber(value)) {
    // TypeScript knows value is a number here
    console.log(value.toFixed(2)); 
  } else if (isObjectWithStringKeyValue(value)) {
    // TypeScript knows value is an object where the property "key" has a value of string here
    console.log(value.key.toUpperCase()); 
  }
  // TypeScript doesn't know about the type of value so gives an error
  console.log(value.key.toUpperCase()); 
}`}</CodeEditor>

      <p>
        The good news is that from TypeScript 5.5 onwards you don't need the return type, which
        makes the code look a lot cleaner. As we are not using TypeScript 5.5 it will error if we
        implement it without the return type, but this is how the code should look.
      </p>

      <CodeBlock>{`function isString(value: unknown) {
  return typeof value === 'string';
}
function isNumber(value: unknown) {
  return typeof value === 'number';
}
function isObjectWithStringKeyValue(value: unknown) {
  return typeof value === 'object' && "key" in value && typeof value.key === 'string';
}

function someValue2(value: unknown){
  if (isString(value)) {
    // TypeScript 5.5 and above will know that the value is a string here
    console.log(value.toUpperCase()); 
  } else if (isNumber(value)) {
    // TypeScript 5.5 and above will know that the value is a number here
    console.log(value.toFixed(2)); 
  } else if (isObjectWithStringKeyValue(value)) {
    // TypeScript 5.5 and above will know that the value is an object where the property "key" has a value of string here
    console.log(value.key.toUpperCase()); 
  }
  // TypeScript doesn't know about the type of value so gives an error
  console.log(value.key.toUpperCase()); 
}`}</CodeBlock>

      <h2>Couldn't this be easier?</h2>
      <p>
        Yes! It could be much easier. If all of this seems too much like hard work you can just use
        schema validation libraries like Zod. This is explained in detail in the following articles{" "}
        <Link href="/recommendations/run-time-checking">Run-time checking</Link> and{" "}
        <Link href="/guides/fetching-data-safely-react">Fetching Data Safely In React</Link>.
      </p>
    </Typography>
  );
}

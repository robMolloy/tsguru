import { CodeBlock, CodeEditor, Typography } from "@/components";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>tsconfig: noUncheckedIndexedAccess</h1>
      <h2>What problem does noUncheckedIndexedAccess solve?</h2>
      <p>
        TypeScript is designed to track and inform you of all available types that could occur given
        a specific action. However, with a basic setup there are some scenarios that TypeScript
        won't inform you of, such as;
      </p>
      <CodeBlock>{`const arr = ["a", "b", "c"]; // arr inferred as string[]
const str = arr[10]; // str inferred as string but is actually undefined at runtime
console.log(str.toUpperCase()); // as str is undefined this will give a run-time error`}</CodeBlock>

      <p>As can be seen from the above scenario, this has the potential of causing errors.</p>

      <h2>How to improve</h2>
      <p>
        By switching on noUncheckedIndexedAccess to the tsconfig we can improve the feedback from
        the editor. Just add `"noUncheckedIndexedAccess":true` in the compilerOptions as shown
        below;
      </p>

      <CodeBlock>{`{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,

    "noUncheckedIndexedAccess": true, // add this line
    ...
  },
  ...
}`}</CodeBlock>

      <p>
        Once noUncheckedIndexedAccess is set to true developers will get the following improvements;
      </p>
      <CodeBlock>{`const arr = ["a", "b", "c"]; // arr still inferred as string[]
const str = arr[10]; // str now inferred as string | undefined

console.log(str.toUpperCase()); // this code will give an error in editor
// it's worth noting that, as always, this doesn't change anything at run-time as TypeScript
// types are not present at run-time - the value comes from guiding the developer

// The error in the editor should encourage the developer to do something like the following;
if(!!str) console.log(str.toUpperCase());
`}</CodeBlock>
      <p>
        We now get the correct inference and the resulting errors in our editor - this can majorly
        speed up our feedback loop and stop one whole category of run-time errors if errors are
        monitored and dealt with.
      </p>
    </Typography>
  );
}

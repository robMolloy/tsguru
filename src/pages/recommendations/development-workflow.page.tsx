import { CodeBlock } from "@/components";

export default function Page() {
  return (
    <div className="prose max-w-xxxl mx-auto my-4">
      <h1>TS Development Workflow</h1>
      <h2>Intro</h2>
      <p>
        Perhaps the one thing that people take longest to get their head around with TypeScript is
        that when the code is running (known as run-time) all the types are discarded and the code
        has been converted into JavaScript. This conversion is done by the TypeScript compiler.
      </p>
      <h2>The TS Compiler is just a linter...(sometimes)</h2>
      <p>
        As well as converting TypeScript code into JavaScript, the TS compiler can act like a linter
        but with one major benefit - it understands data. This means that it can check your data is
        correct (or more accurately consistent) and give you helpful errors if not. Most frameworks
        will have a decent TypeScript setup out of the box, and this will provide errors in your
        whole project as you make changes.
      </p>
      <h2>Run the compiler whilst developing</h2>
      <p>
        One of the most likely ways to cause issues with when developing is by making changes in one
        file that causes an error in another - that's where the TS compiler comes in. By running
        `tsc --noEmit --watch` in your terminal from the root of your project, you can get real-time
        feedback on any errors on your whole codebase. This is especially useful when working with
        data stores, where small changes at this level can proliferate through the whole project.
      </p>
      <p>To use the above command you will need to install TypeScript globally with</p>
      <CodeBlock>npm install -g typescript</CodeBlock>
      <p>
        but an easier way to do this to add it as a script in your package.json file. Assuming
        TypeScript is already installed, just add the line
      </p>
      <CodeBlock>"tsc:watch": "tsc --noEmit --watch"</CodeBlock>
      <p>within scripts of package.json. You can then run the command with</p>
      <CodeBlock>npm run tsc:watch</CodeBlock>
      <p>Below is the relevant parts of package.json.</p>
      <CodeBlock>
        {`{
  "name": "newProject",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "tsc:watch": "tsc --noEmit --watch",
    ...
  },
  "devDependencies": {
    "typescript": "^5",
    ...
  },
  ...
}
`}
      </CodeBlock>
      <h2>In summary</h2>
      <p>
        Once `"tsc:watch": "tsc --noEmit --watch"` is added to your package.json, you can simply run
        `npm run tsc:watch` in your terminal from the root of your project to keep you informed of
        any errors throughout the project. Effort should be made to keep this in a "found 0 errors"
        state
      </p>
    </div>
  );
}

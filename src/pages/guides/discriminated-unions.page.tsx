import { CodeBlock, CodeEditor, Typography } from "@/components";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Discriminated Unions</h1>

      <h2>What are discriminated unions?</h2>
      <p>
        Discriminated unions is structuring a union of types made up of objects that all have a
        common key, but importantly each have a different value. They are particularly useful for
        handling scenarios where a variable can be one of several variants, each with its own
        properties.
      </p>

      <h2>Discriminated union basic example</h2>
      <p>
        Suppose we want to define a type TShape that can be either a circle or a rectangle. We can
        use discriminated unions to achieve this;
      </p>
      <CodeEditor height={40}>{`type TCircle = { kind: "circle"; radius: number };
type TRectangle = { kind: "rectangle"; width: number; height: number };
type TShape = TCircle | TRectangle;

const getShape = (): TShape => {
  // returns either a variable of TCircle or TRectangle
  return Math.random() > 0.5
    ? { kind: "rectangle", width: 100, height: 200 }
    : { kind: "circle", radius: 100 };
};

const shape = getShape();

if (shape.kind === "circle") console.log(\`radius: \${shape.radius}\`);
else console.log(\`width: \${shape.height} and height: \${shape.width}\`);

// note that if we try to access width for a circle we will get an error
if (shape.kind === "circle") console.log(\`width will error \${shape.width}\`);`}</CodeEditor>

      <p>
        This gives instant feedback to the developer as if <code>shape.kind !== "rectangle"</code>{" "}
        then <code>shape.width</code> will give an error in the editor.
      </p>

      <h2>Summary</h2>
      <p>
        A discriminated union is a union of several object types that share a common property, each
        with a differing value. Discriminated unions enhance type safety by ensuring that only the
        correct properties are able to be accessed based on the type of the value and encourage
        readable code by making it easy to write functions that handle each type in the union
        differently.
      </p>
    </Typography>
  );
}

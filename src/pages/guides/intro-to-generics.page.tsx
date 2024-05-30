import { CodeBlock, CodeEditor, Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Intro To Generics</h1>

      <h2>Using generics</h2>
      <p>
        If you've used any major framework or many libraries that work well with TypeScript, you
        will have seen that there by passing values the type will be inferred. Let's look at a React
        TypeScript example.
      </p>

      <CodeBlock>{`const [state, setState] = useState('hello');
type TState = typeof state; // string
setState('world'); // does not error
setState(123); // does error`}</CodeBlock>

      <p>Two questions;</p>
      <ol>
        <li>How does the TypeScript compiler know that it's a string?</li>
        <li>
          How can we allow <code>useState</code> to accept numbers as well as strings?
        </li>
      </ol>
      <p>
        Let's start with the latter question. We can expand the type to include{" "}
        <code>string | number</code> by giving an explicit type annotation to <code>useState</code>.
      </p>

      <CodeBlock>{`const [state, setState] = useState<string | number>('hello');
type TState = typeof state; // string | number
setState('world'); 
setState(123); // no longer errors error`}</CodeBlock>

      <p>
        By using an explicit type annotation, TypeScript knows that either data type can be
        accepted. But what's happening when we do this? We can create our own function to make it
        clearer.
      </p>

      <h2>Creating generics</h2>
      <p>
        The following is a simple example which shows how the generic behaves when we pass an
        explicit type annotation.
      </p>
      <CodeEditor height={30}>{`function returnsTheSameType<T>(arg: T) {
  return arg;
}
const initVar1 = 'hello'; // inferred as string
const var1 = returnsTheSameType<string>(initVar1);
type TVar1 = typeof var1; // string

const initVar2 = 'world'; // inferred as string
const var2 = returnsTheSameType<number>(initVar2); // error - argument doesn't match explicit type annotation

const initVar3: string | number = 'world'; // explicitly string | number
const var3 = returnsTheSameType<string | number>(initVar3);
type TVar3 = typeof var3; // string | number`}</CodeEditor>

      <p>In the previous code;</p>
      <ul>
        <li>
          <code>&lt;T&gt;</code> declares a generic type variable <code>T</code>
        </li>
        <li>
          <code>arg: T</code> indicates that <code>arg</code> is of type <code>T</code>
        </li>
        <li>
          The function returns the argument <code>arg</code> which is of type <code>T</code>
        </li>
        <li>
          This function is then called with an argument that must match the explicit type annotation
        </li>
      </ul>

      <p>
        But how can we just infer the type without providing an explicit type annotation? Good news!
        The code already works in this way if we just remove the type annotations.
      </p>

      <CodeEditor height={20}>{`const initVar4 = 'hello'; // inferred as string
const var4 = returnsTheSameType(initVar4);
type TVar4 = typeof var1; // string

const initVar5: string | number = 'world'; // explicitly string | number
const var5 = returnsTheSameType<string | number>(initVar5);
type TVar5 = typeof var5; // string | number`}</CodeEditor>

      <p>
        As we are providing the type by passing in an argument TypeScript knows to just infer the
        value.
      </p>

      <h2>Generic constraints</h2>
      <p>
        If we only wanted the function to work on <code>string | number</code> arguments, we can
        pass a generic constraint.
      </p>
      <CodeEditor height={25}>{`function returnsTheSameType2<T extends string | number>(arg: T) {
  return arg;
}

const initVar6 = 'hi'; // inferred as string
const var6 = returnsTheSameType2(initVar6);
type TVar6 = typeof var6; // string

const initVar7 = undefined; // inferred as undefined
const var7 = returnsTheSameType2(initVar7); // error - argument doesn't match generic constraint`}</CodeEditor>

      <h2>Additional reading</h2>
      <p>
        For a more complex example you may want to look at{" "}
        <Link href="/articles/no-infer">No Infer: TypeScript 5.4</Link> where we explain the NoInfer
        utility type and how it can be used to create a function that accepts 2 arguments;{" "}
        <code>allPossibleValues</code>, and the <code>selectedValue</code> which is an item within{" "}
        <code>allPossibleValues</code>. This is a particularly useful pattern for things like{" "}
        <code>&lt;Select /&gt;</code> components.
      </p>
    </Typography>
  );
}

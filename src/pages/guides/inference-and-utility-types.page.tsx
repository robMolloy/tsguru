import { CodeBlock, Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Inference and Utility Types</h1>
      <h2>Related reading</h2>
      <ul>
        <li>
          <Link href="/guides/well-named-types-and-variables">Well Named Types And Variables</Link>
        </li>
        <li>
          <Link href="/recommendations/run-time-checking">Run-time Checking</Link>
        </li>
      </ul>
      <h2>Why use inference?</h2>
      <p>
        TypeScript code can quickly become verbose and unclear if not written carefully. One way to
        mitigate this is to create types that are built from other types. The process of building
        one type from another is called inference and we can edit/manipulate a type using utility
        types, and other methods that are provided by TypeScript and are documented excellently in
        the{" "}
        <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html">
          TypeScript Docs
        </a>
        .
      </p>
      <h2>
        <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys">
          Pick
        </a>
      </h2>
      <p>
        It is common to have a broader type that represents an entity in a database such as{" "}
        <code>TBlogPost</code>, but there will be scenarios (such as when displaying on a page with
        many items), that only certain properties are needed in order to preview of each of these
        items.
      </p>
      <p>
        For these scenarios, the utility type <code>Pick</code> is very helpful;
      </p>
      <CodeBlock>{`type TBlogPost {
  title: string;
  subtitle: string;
  content: string;
  createdAt: string;
}
const blogPost: TBlogPost = { 
  title: "write a good blog", 
  subtitle: "writing a good blog is not always easy", 
  content: "some content here", 
  createdAt: 1680219151,
},

type TBlogPostPreview = Pick<TBlogPost, "title" | "createdAt">;
 
const blogPostPreview: TBlogPostPreview = {
  title: "next article", 
  createdAt: 1680219151,
};`}</CodeBlock>
      <p>
        Please note that if we pass in a variable of type <code>TBlogPost</code> into something that
        requires <code>TBlogPostPreview</code> then it will still satisfy the condition as (perhaps
        counter-intuitively) <code>TBlogPost</code> is the narrower of the two types. This concept
        is explained more fully in{" "}
        <Link href="/guides/conditional-types-explained">Conditional Types Explained</Link> and{" "}
        <Link href="/guides/conditional-types-visualised">Conditional Types Visualised</Link>.
      </p>
      <h2>
        <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys">
          Omit
        </a>
      </h2>
      <p>
        <code>Omit</code> is similar-but-opposite of <code>Pick</code>. Instead of Picking the
        relevant items from an object we can instead remove the irrelevant items.
      </p>
      <CodeBlock>{`type TBlogPost {
  title: string;
  subtitle: string;
  content: string;
  createdAt: string;
}
const blogPost: TBlogPost = { 
  title: "write a good blog", 
  subtitle: "writing a good blog is not always easy", 
  content: "some content here", 
  createdAt: 1680219151,
},

type TBlogPostPreview = Omit<TBlogPost, "subtitle" | "content">;
 
const blogPostPreview: TBlogPostPreview = {
  title: "next article", 
  createdAt: 1680219151,
};`}</CodeBlock>
      <p>
        <code>Omit</code> can sometimes be more suitable than <code>Pick</code>, as the inferred
        type can often be{" "}
        <i>everything in the main entity type but without createdAt and updatedAt keys</i>. If this,
        or similar, is the case <code>Omit</code> is the utility type to use.
      </p>

      <h2>
        <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union">
          ReturnType
        </a>
      </h2>
      <p>
        <code>ReturnType</code> is a valuable utility type for obtaining the return type of a
        function. It's particularly useful because if the return type of a function changes, the
        logic that depends on the returned value usually needs to be updated accordingly.
      </p>
      <CodeBlock>{`import { z } from "zod";

const petSchema = z.object({
  type: z.union([z.literal("cat"), z.literal("dog")]),
  name: z.string(),
  age: z.number(),
  breed: z.string(),
});

const getSafePetData = () => {
  const randomPet = getARandomPet();
  const parseResponse = petSchema.safeParse(randomPet);
  return parseResponse;
};

type TSafePetData = ReturnType<typeof getSafePetData>;`}</CodeBlock>
      <p>This type is now very useable, but is only suitable if the function is synchronous.</p>

      <h2>
        <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype">
          Awaited
        </a>
      </h2>
      <p>
        The above scenario (in the <code>ReturnType</code> example) wouldn't be particulartly useful
        to a developer if the function was asynchronous as it would give a type of{" "}
        <code>Promise&lt;TSafePetData&gt;</code>. So how do we deal with this scenario, in order to
        get the useable type?
      </p>
      <CodeBlock>{`import { z } from "zod";

const petSchema = z.object({
  type: z.union([z.literal("cat"), z.literal("dog")]),
  name: z.string(),
  age: z.number(),
  breed: z.string(),
});

const fetchSafePetData = async () => {
  const randomPet = await fetchARandomPet();
  const parseResponse = petSchema.safeParse(randomPet);
  return parseResponse;
};

type TSafePetDataReturn = ReturnType<typeof fetchSafePetData>; // equivalent to Promise<TSafePetData>
type TSafePetData = Awaited<TSafePetDataReturn>;`}</CodeBlock>
      <p>
        By wrapping <code>TSafePetDataReturn</code> in the <code>Awaited&lt;&gt;</code> utility type
        we gain access to the useable type from within the <code>Promise</code>.
      </p>

      <h2>
        <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union">
          Extract
        </a>
      </h2>
      <p>
        <code>Extract</code> is a great utility type to get appropriate types from a discriminated
        union. It can often work well alongside ReturnType (but doesn't have to);
      </p>
      <CodeBlock>{`const getShape = () => {
  const circle = { kind: "circle", radius: 100 } as { kind: "circle"; radius: number };
  const rectangle = { kind: "rectangle", width: 100, height: 200 } as { kind: "rectangle"; width: number; height: number; };
  return Math.random() > 0.5 ? circle : rectangle;
};

type TShape = ReturnType<typeof getShape>; 
// { kind: "circle"; radius: number } | { kind: "rectangle"; width: number; height: number; }

type TCircle = Extract<TShape, { kind: "circle" }>; // { kind: "circle"; radius: number }
type TRectangle = Extract<TShape, { kind: "rectangle" }>; // { kind: "rectangle"; width: number; height: number; }`}</CodeBlock>

      <p>
        So we now have access to <code>TCircle</code> or <code>TRectangle</code> to use as we wish.
      </p>

      <h2>Indexed access type</h2>
      <p>
        If we have an array or an object we may want to get some of their internal values, this is
        called indexed access types. This can be done easily with arrays or objects. Let's start
        with arrays;
      </p>
      <CodeBlock>{`type TArray = ("dog" | "cat" | "fish")[];
type TArrayItem = TArray[number]; // this type is "dog" | "cat" | "fish"`}</CodeBlock>

      <p>Great! Now let's look at an object;</p>
      <CodeBlock>{`type TObject = { 
  kind: "dog" | "cat" | "fish";
  color: string;
};
type TObjectKind = TObject["kind"]; // this type is "dog" | "cat" | "fish"`}</CodeBlock>

      <h2>Third-party libraries</h2>
      <p>
        There are scenarios where third-party libraries don't make types accessible - when this is
        the case we can work a bit of TypeScript magic. For example, the excellent database
        pocketbase doesn't make accessing the database type easily. We can fix this with the
        following code;
      </p>
      <CodeBlock>{`import PB from 'pocketbase';

const functionThatIsNeverCalled = () => new PB('');
type TPocketbaseDb = ReturnType<typeof functionThatIsNeverCalled>;`}</CodeBlock>
      <p>
        So now we can use the type <code>TPocketbaseDb</code> in this file or export it to use it
        throughout the project. Just be careful with this method as you only want the minimum code
        necessary to be running at run-time. Let's look at the following;
      </p>

      <CodeBlock>{`import PB from 'pocketbase';

const varThatIsNeverUsed = new PB('');
type TPocketbaseDb = typeof varThatIsNeverUsed;`}</CodeBlock>
      <p>
        From the perspective of the TypeScript type-system this is doing something very similar and
        is getting the same type. However at run-time we are creating an unnecessary database
        instance that will be using memory. Instead, just wrap it in a function - this will minimise
        memory usage - but, if it is an option, it is always best import the type as there is no
        additional work happening at run-time.
      </p>

      <h2>Combining what we've learned</h2>
      <p>If we were importing the following function from a third-party library;</p>
      <CodeBlock>{`const fetchSafePetData = async () => {
  const petSchema = z.object({
    kind: z.union([z.literal("cat"), z.literal("dog")]),
    name: z.string(),
    age: z.number(),
    breed: z.string(),
  });

  const randomPet = await fetchARandomPet();
  const parseResponse = petSchema.safeParse(randomPet);
  return data;
};
`}</CodeBlock>
      <p>
        Lets say we want to get the <code>kind</code> of pets from the function{" "}
        <code>fetchSafePetData()</code>. We can do this as follows;
      </p>
      <CodeBlock>{`import { fetchSafePetData } from "somepackage";

type TSafePetData = Awaited<ReturnType<typeof fetchSafePetData>>;
type TSafePetDataSuccess = Extract<TSafePetData, { success: true }>;
type TPetKind = TSafePetDataSuccess['kind'];`}</CodeBlock>

      <h2>Additional resources</h2>
      <p>
        As mentioned already, the TypeScript Docs have a section on{" "}
        <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html">utility types</a>{" "}
        that is well worth reading, but there are also summarised versions of similar topics
        available in the <a href="https://www.typescriptlang.org/cheatsheets/">cheatsheets</a>.
      </p>
    </Typography>
  );
}

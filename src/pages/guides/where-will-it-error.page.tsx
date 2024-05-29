import { CodeBlock, Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Where Will It Error?</h1>

      <h2>Related Reading</h2>
      <p>
        This article aims to connect various concepts discussed in other articles - serving as both
        introductory exposure and a starting point to weave together many important concepts for
        writing high-quality TypeScript code. The following articles are mentioned in this one, if
        you would like to read them first;
      </p>
      <ul>
        <li>
          <Link href="/guides/intro-to-zod">Intro To Zod</Link>
        </li>
        <li>
          <Link href="/guides/certainty-boundary">Certainty Boundary</Link>
        </li>
        <li>
          <Link href="/guides/discriminated-unions">Discriminated Unions</Link>
        </li>
        <li>
          <Link href="/guides/categories-of-components">Categories of Components</Link>.
        </li>
        <li>
          <Link href="/recommendations/development-workflow">TS Development Workflow</Link>
        </li>
        <li>
          <Link href="/guides/facade-pattern">The Facade Pattern</Link>
        </li>
        <li>
          <Link href="/guides/inference-and-utility-types">Inference and Utility Types</Link>
        </li>
      </ul>

      <p>
        Don't worry if you're struggling to read this article in one go - it's not meant to be. If
        any part seems unclear, just read the relevant linked article first for a better
        understanding, then return to where you left off.
      </p>

      <h2>Source of truth</h2>
      <p>
        In any project the single source of truth is the database/APIs. Some databases, such as
        Prisma, can automatically create new types within a project, which is an excellent way to
        keep track of types.
      </p>
      <p>
        As most APIs are more flexible than a Prisma database, we would suggest that the next most
        reliable way to track types is to create Zod schemas that are not the source of truth, but
        are a reflection of the source of truth. From these schemas all other types should be
        inferred - if you're not familiar read more about Zod schemas in the article{" "}
        <Link href="/guides/intro-to-zod">Intro To Zod</Link>.
      </p>

      <h2>The store</h2>
      <p>
        If we take the TS Gurus article on the{" "}
        <Link href="/guides/certainty-boundary">Certainty Boundary</Link>, and create a store that
        gives us certainty that we are receiving data that corresponds to it's type as so;
      </p>
      <CodeBlock>{`import { z } from "zod";
import { create } from "zustand";

const bearsSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    age: z.number(),
  })
);
type TBears = z.infer<typeof bearsSchema>;
type TBearState = {
  bearsResponse: TBears | undefined;
  fetchAndSetBears: () => Promise<void>;
  getSafeBears: () =>
    | { status: "loading" }
    | { status: "error" }
    | { status: "success"; data: TBears };
};

const useBearStore = create<TBearState>()((set, get) => ({
  bearsResponse: undefined,
  fetchAndSetBears: async () => {
    const data = await fetch("https://somebears.com/api");
    const bearsResponse = (await data.json()) as TBears;

    set({ bearsResponse: bearsResponse });
  },
  getSafeBears: () => {
    const bearsResponse = get().bearsResponse;
    if (bearsResponse === undefined) return { status: "loading" };

    const parseResponse = bearsSchema.safeParse(bearsResponse);

    if (parseResponse.success) return { status: "success", data: parseResponse.data };
    return { status: "error" };
  },
}));`}</CodeBlock>

      <p>
        The store's <code>getSafeBears()</code> method takes advantage of{" "}
        <Link href="/guides/discriminated-unions">Discriminated Unions</Link> which allow the
        developers that are consuming the store to easily write code for each scenario by checking
        the status key.
      </p>

      <h2>Usage</h2>
      <p>
        The above store now allows us to write incredibly readable code, where each scenario can be
        handled without unncecessarily complex logic. As the following code uses a store it is an
        example of a smart component as defined in{" "}
        <Link href="/guides/categories-of-components">Categories of Components</Link>.
      </p>

      <CodeBlock>{`export const BearsComponent = () => {
  const bearStore = useBearStore();
  const safeBears = bearStore.getSafeBears();

  return (
    <div>
      {safeBears.status === "loading" && <div>loading...</div>}
      {safeBears.status === "error" && <div>ERROR</div>}
      {safeBears.status === "success" &&
        safeBears.data.map((x) => (
          <div key={x.id} style={{ display: "flex" }}>
            <span>{x.id}</span>
            <span>{x.name}</span>
            <span>{x.age}</span>
          </div>
        ))}
    </div>
  );
};`}</CodeBlock>

      <p>
        If the database was to be changed from having the column <code>name</code> to{" "}
        <code>fullName</code> we could simply change update the schema used for our store and we
        would automatically be notified that <code>x.name</code> doesn't exist in{" "}
        <code>BearsComponent</code>. If instead we had hardcoded our type in multiple places we may
        not get an error in all the relevant places.
      </p>

      <p>
        So that you're notified of all the places that changes need to be made, make sure you're
        running <code>tsc --noEmit --watch</code> in your terminal from the root of your project or
        use another similar command as suggested in{" "}
        <Link href="/recommendations/development-workflow">TS Development Workflow</Link>.
      </p>

      <h2>Inferring the props</h2>
      <p>
        We can follow the logic as laid out in{" "}
        <Link href="/guides/categories-of-components">Categories of Components</Link> and instead of
        writing out each of the three states from within the smart component (as shown in the usage
        example) we may want to create a tightly-fitting component that fits tightly to the return
        type of the <code>getSafeBears()</code> method from <code>useBearStore()</code>. Let's make
        the <code>&lt;DisplaySafeBears /&gt;</code> component now;
      </p>

      <CodeBlock>{`type TUseBearStore = ReturnType<typeof useBearStore>;
type TSafeBears = ReturnType<TUseBearStore["getSafeBears"]>;

const DisplaySafeBears = (props: { safeBears: TSafeBears }) => {
  const { safeBears } = props;
  return (
    <>
      {safeBears.status === "loading" && <div>loading...</div>}
      {safeBears.status === "error" && <div>ERROR</div>}
      {safeBears.status === "success" &&
        safeBears.data.map((x) => (
          <div key={x.id} style={{ display: "flex" }}>
            <span>{x.id}</span>
            <span>{x.name}</span>
            <span>{x.age}</span>
          </div>
        ))}
    </>
  );
};`}</CodeBlock>
      <p>This would then allow us to rewrite the example in the usage section as the following;</p>
      <CodeBlock>{`export const BearsComponent = () => {
  const bearStore = useBearStore();
  const safeBears = bearStore.getSafeBears();

  return (
    <div>
      <DisplaySafeBears safeBears={safeBears} />
    </div>
  );
};`}</CodeBlock>

      <p>
        This uses <Link href="/guides/facade-pattern">The Facade Pattern</Link> to hide some logic.
        We do this by inferring the types using some of the methods shown in{" "}
        <Link href="/guides/inference-and-utility-types">Inference and Utility Types</Link> - some
        other methods from this guide would allow us to break the component down further by using
        the <code>Extract</code> utility type in order to make a component for each of the states;{" "}
        <code>"loading" | "error" | "success"</code>.
      </p>
    </Typography>
  );
}

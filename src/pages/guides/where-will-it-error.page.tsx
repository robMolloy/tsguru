import { CodeBlock, Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Where Will It Error?</h1>

      <h2>Related Reading</h2>
      <p>
        This article builds on <Link href="/guides/certainty-boundary">Certainty Boundary</Link> as
        well as many of the concepts around inference that are discussed in{" "}
        <Link href="/guides/inference-and-utility-types">Inference and Utility Types</Link> and{" "}
        <Link href="/guides/categories-of-components">Categories of Components</Link>.
      </p>

      <h2>Source of truth</h2>
      <p>
        In any project the single source of truth is the database. Some databases, such as Prisma,
        can automatically create new types within a project, which is an excellent way to keep track
        of types.
      </p>
      <p>
        As most APIs are more flexible than a Prisma database, we would suggest that the next most
        reliable way to track types is to create Zod schemas that are not the source of truth, but
        are a reflection of the source of truth. From these schemas all other types should be
        inferred.
      </p>

      <h2>The store</h2>
      <p>
        If we take the TS Gurus article on the{" "}
        <Link href="/guides/certainty-boundary">Certainty Boundary</Link>, and create a store that
        that gives us certainty that we are receiving data that corresponds to it's type as so;
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
    console.log(parseResponse);

    if (parseResponse.success) return { status: "success", data: parseResponse.data };
    return { status: "error" };
  },
}));`}</CodeBlock>

      <p>We can then build out </p>
    </Typography>
  );
}

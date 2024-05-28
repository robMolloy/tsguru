import { CodeBlock, Typography } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Certainty Boundary</h1>

      <h2>Additional reading</h2>
      <p>
        We have an article{" "}
        <Link href="/guides/fetching-data-safely-react">Fetching Data Safely In React</Link> which
        covers a similar topic. This article is a follow-on, but with a focus on a solution built
        for large-scale projects.
      </p>

      <h2>Summary</h2>
      <p>
        In short, the certainty boundary is an area within the app (we will focus on the UI in this
        article) where developers can be 100% confident that the expected data is present and can be
        used without any additional checks.
      </p>

      <p className="flex justify-center">
        <img
          alt="certainty boundary diagram"
          src="/certainty-boundary.png"
          className="rounded-xl overflow-hidden m-0"
        />
      </p>

      <p>
        This is a concept created and encouraged by TS Gurus which allows for fast, high-quality UI
        development. Although it is a novel approach, it is in some ways an improvement on the
        concept of the "offline-first" design and development approach which uses hardcoded data and
        prioritizes happy-path functionality without being concerned about edge-cases. This can be
        an effective way of programming, but it can also lead to a short-sighted approach to
        building an app and lead to problems when connecting to a live API due to the uncertainty
        and loading states that come with it.
      </p>

      <p>
        The concept of the certainty boundary aims to make the most of the fast progress that can be
        made with offline-first development, and mitigate the downsides of the offline-first
        approach. The certainty boundary also has the advantage of building an app in a way that is
        more suitable to a large-scale project with many features.
      </p>

      <h2>Interface layer</h2>
      <p>
        As the certainty boundary is a concept not a set of rules, it can be applied in whatever way
        the developer sees fit. However, in this guide we will use a React app that uses a "Zustand"
        store to create the interface layer (as pictured in the diagram at the top of this article).
        Zustand is an alternative to Redux that many people find simpler to use and is more suitable
        to getting the most out of Typescript.
      </p>

      <p>
        For more info on Zustand, have a look at the excellent{" "}
        <a href="https://docs.pmnd.rs/zustand/guides/typescript">Zustand docs</a>. We are also using{" "}
        Zod to provide the "certainty" through schema-validation which also has great{" "}
        <a href="https://zod.dev/">docs</a>. Zod is discussed at length in a number of TS Gurus
        articles such as <Link href="/recommendations/run-time-checking">Run-time Checking</Link>{" "}
        and <Link href="/guides/fetching-data-safely-react">Fetching Data Safely In React</Link>.
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

      <h2>Usage</h2>
      <p>
        The above store now allows us to write incredibly readable code, where each scenario can be
        handled without unncecessarily complex logic.
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
};
`}</CodeBlock>
      <p>
        Remember, the certainty boundary is a concept to enable developers to use data effectively,
        without second-guessing whether or not the data conforms to it's type. This is just one
        implementation but let us know if you use it in a different way.
      </p>
    </Typography>
  );
}

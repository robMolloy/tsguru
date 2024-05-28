import { CodeBlock, Typography } from "@/components";
import fs from "fs/promises";
import Link from "next/link";
import { useState } from "react";
export async function getStaticProps() {
  const text = await fs.readFile("src/reference/generics-cheatsheet-reference-code.ts", "utf8");

  return { props: { text } };
}
type TStaticProps = Awaited<ReturnType<typeof getStaticProps>>["props"];

export default function Page(p: TStaticProps) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [showExtends, setShowExtends] = useState(true);

  return (
    <Typography fullPage>
      <h1>Conditional Types</h1>
      <h2>The Basics</h2>
      <p>
        Conditional types can be difficult for developers to get their head around at first. As with
        anything, it's important to start with the basics. One strategy that may help is by
        replacing the word "extends" with "isASubsetOf".
      </p>

      <p>
        Learning the patterns shown in the code below, and the logic behind the patterns can be the
        key to understanding generics - it is much like learning multiplication tables when first
        learning mathematics. You don't become a genius be learning them, but it is important to
        learn these foundational patterns before you can start to solve other problems.
      </p>

      <p>
        For a more visual way of explaining you can review{" "}
        <Link href="conditional-types-visualised">Conditional Types Visualised</Link>.
      </p>

      <div className="flex justify-around">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Show answers</span>
            <input
              type="checkbox"
              className="toggle"
              checked={showAnswers}
              onChange={() => setShowAnswers((x) => !x)}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Show Extends</span>
            <input
              type="checkbox"
              className="toggle"
              checked={showExtends}
              onChange={() => setShowExtends((x) => !x)}
            />
          </label>
        </div>
      </div>

      <CodeBlock>
        {p.text
          .replace(/\/\/\s*\^\?\s*/g, "")
          .replace(/\n\/\/\s*false/g, showAnswers ? " // false" : "")
          .replace(/\n\/\/\s*true/g, showAnswers ? " // true" : "")
          .replace(/extends/g, showExtends ? "extends" : "isASubsetOf")}
      </CodeBlock>
    </Typography>
  );
}

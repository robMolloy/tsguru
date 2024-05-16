import { CodeBlock, Typography } from "@/components";
import fs from "fs/promises";
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
    <Typography>
      <div>
        Generics can sometimes be difficult to get you head around but as with anything, it's
        important to start with the basics. One strategy that may help is by replacing the word
        "extends" with "isASubsetOf".
      </div>

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

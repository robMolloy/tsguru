import { Hero, Typography } from "@/components";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [state, setState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 1000);
  }, []);
  return (
    <div>
      <Hero className="py-32">
        <div className="prose">
          <h1 className="mt-0">Are you productive in the world's most productive language?</h1>
          <p className="text-xl">
            Here at TS Gurus we focus on improving your TypeScript skills and providing the tools
            and resources to improve your team's code.
          </p>
        </div>
      </Hero>

      <Typography>
        <p>
          Annually, more code is authored and executed in JavaScript than in any other language,
          with this figure continually rising. The flexibility of JavaScript is a key benefit that
          simplifies development, but it has its trade-offs. TypeScript can address these issues,
          but if implemented poorly can lead to additional complications.
        </p>

        <p>
          At TS Gurus we offer a full suite of services that can be applied to part or all of a
          project of any size.
        </p>
        <p>
          We also provide a number of upskilling and training services to get your whole team to
          write high quality code and following TypeScript best-practices. Unlock the full potential
          of TypeScript with TS Gurus today by getting us to{" "}
          <Link href="/services/audit-service"> audit your project</Link>! Or view our{" "}
          <Link href="/services">full range of services</Link>.
        </p>
        <p>
          When used correctly, TypeScript will save development time due to the reduction in debug
          time, and completely removing entire categories of errors. However, the TypeScript
          compiler works across your whole project, and small errors in one area can cause errors
          throughout.
        </p>
      </Typography>
    </div>
  );
}

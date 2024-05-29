import { Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-base-100 via-base-100 via-75% to-primary ">
        <Typography>
          <div className="flex flex-col text-center pt-32 pb-48 gap-8">
            <h1 className="text-[3rem] text-primary my-0">
              Are you productive in the world's most productive language?
            </h1>
            <h2 className="text-[1.5rem] mx-10 my-0 ">
              Here at TS Gurus we focus on improving your TypeScript skills and providing the tools
              and resources to improve your team's code.
            </h2>
            <p className="flex justify-center gap-4 my-0">
              <Link className="btn btn-primary sm:btn-wide" href="/services/audit-service">
                Audit your app
              </Link>
              <Link className="btn btn-outline sm:btn-wide" href="/services/">
                View all services
              </Link>
            </p>
          </div>
        </Typography>
      </div>
      <Typography>
        <p>
          Annually,{" "}
          <a href="https://octoverse.github.com/2022/top-programming-languages">
            more code is authored in JavaScript than any other language,
          </a>{" "}
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

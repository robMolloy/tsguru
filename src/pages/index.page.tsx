import { Typography, VerticalSpacing } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Typography fullPage>
        <VerticalSpacing size="big" />

        <div className="flex flex-col gap-8 text-center">
          <h1 className="my-0 text-[3rem] text-primary">
            Are you productive in the world's most productive language?
          </h1>
          <h2 className="mx-10 my-0 text-[1.5rem]">
            Here at TS Gurus we focus on improving your TypeScript projects and providing the tools
            and resources to improve the code your team delivers.
          </h2>
          <p className="my-0 flex justify-center gap-4">
            <Link className="btn btn-primary sm:btn-wide" href="/services/audit-service">
              Audit your app
            </Link>
            <Link className="btn btn-outline sm:btn-wide" href="/services/">
              View all services
            </Link>
          </p>
        </div>

        <VerticalSpacing size="bigger" />

        <div className="flex justify-center">
          <blockquote>
            <p>become a master of TypeScript</p>
          </blockquote>
        </div>

        <VerticalSpacing size="bigger" />

        <p>
          Annually,{" "}
          <a href="https://octoverse.github.com/2022/top-programming-languages">
            more code is authored to run in JavaScript than any other language,
          </a>{" "}
          and the proportion that is written in TypeScript is growing every year. Despite this,
          TypeScript is often seen more of a necessary inconvenience than a helpful tool.
        </p>
        <p>
          At TS Gurus we would encourage you to stop struggling with the tools you use and set a new
          goal - become a master of TypeScript.
        </p>
        <p>
          We provide services for enhance the quality of code developers write as well as services
          to audit and improve the code written in existing projects. Unlock your full potential of
          TypeScript with TS Gurus today by getting us to{" "}
          <Link href="/services/audit-service">audit your project</Link>! Or view our{" "}
          <Link href="/services">full range of services</Link>.
        </p>
      </Typography>
    </div>
  );
}

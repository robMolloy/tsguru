import { Hero } from "@/components";

export default function Home() {
  return (
    <div>
      <Hero className="py-32">
        <div className="prose">
          <h2>
            Are you being productive in the world's most productive language?
          </h2>

          <p>
            At TS Gurus we offer a full suite of services that can be applied to
            part or all of a project of any size as well as providing a number
            of upskilling and training services to get your whole team write
            high quality code and following all TypeScript best-practices.
            Unlock the full potential of TypeScript with TS Gurus today by
            getting us to audit your project!
          </p>
        </div>
      </Hero>

      <div className="prose max-w-xxxl m-auto ">
        <p>
          More new code is written and run in JavaScript each year than any
          other language and that amount is growing. JavaScript's flexibility is
          one of the things that makes it great and easy to work with, but comes
          with trade-offs. TypeScript can be the solution but when used badly
          can offer more issues that it resolves.
        </p>
        <p>
          When used correctly, TypeScript will save development time due to the
          reduction in debug time, and completely removing entire categories of
          errors. However, the TypeScript compiler works across your whole
          project, and small errors in one area can cause errors throughout.
        </p>
      </div>
    </div>
  );
}

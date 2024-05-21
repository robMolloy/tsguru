import Link from "next/link";
import { ThemeSelector } from "../themeSelector";

export const SideMenu = (p: { show: boolean }) => {
  return (
    <div
      className={`bg-base-200 h-screen overflow-y-scroll block border-r ${p.show ? "" : "hidden"}`}
    >
      <ul className="menu">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/services-overview"}>Services Overview</Link>
        </li>
        <li>
          <h2>
            <Link href={"/articles"}>Articles</Link>
          </h2>
          <ul>
            <li>
              <Link href={"/articles/data-consumption"}>data-consumption</Link>
            </li>
            <li>
              <Link href={"/articles/never-assert"}>never-assert.page.tsx</Link>
            </li>
            <li>
              <Link href={"/articles/no-infer-article"}>no-infer-article.page.tsx</Link>
            </li>
            <li>
              <Link href={"/articles/no-unchecked-indexed-access"}>
                no-unchecked-indexed-access.page.tsx
              </Link>
            </li>
            <li>
              <Link href={"/articles/type-predicates-article"}>
                type-predicates-article.page.tsx
              </Link>
            </li>
            <li>
              <Link href={"/articles/write-better-not-worse-code"}>
                write-better-not-worse-code.page.page.tsx
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>
            <Link href={"/guides"}>Guides</Link>
          </h2>
          <ul>
            <li>
              <Link href={"/guides/generics-conditionals-cheatsheet"}>
                Conditional Generics Cheatsheet
              </Link>
            </li>
            <li>
              <Link href={"/guides/generics-conditionals-visualised"}>
                Conditional Generics Visualised
              </Link>
            </li>
            <li>
              <Link href={"/guides/intro-to-generics-guide"}>intro-to-generics-guide</Link>
            </li>
            <li>
              <Link href={"/guides/name-your-data-types-well"}>name-your-data-types-well</Link>
            </li>
            <li>
              <Link href={"/guides/smart-dumb-tight-ui-components"}>
                smart-dumb-tight-ui-components.page
              </Link>
            </li>
            <li>
              <Link href={"/guides/the-magic-of-discriminated-unions"}>
                the-magic-of-discriminated-unions
              </Link>
            </li>
            <li>
              <Link href={"/guides/the-magic-of-zod"}>the-magic-of-zod.page</Link>
            </li>
            <li>
              <Link href={"/guidestype-inference-guide"}>type-inference-guide</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>
            <Link href={"/services"}>Services</Link>
          </h2>
          <ul>
            <li>
              <Link href="/services/advise-service">advise-service</Link>
            </li>

            <li>
              <Link href="/services/audit-service">audit-service</Link>
            </li>

            <li>
              <Link href="/services/build-service">build-service</Link>
            </li>

            <li>
              <Link href="/services/contribute-service">contribut-service</Link>
            </li>

            <li>
              <Link href="/services/guide-service">guide-service</Link>
            </li>

            <li>
              <Link href="/services/implement-service">implement-service</Link>
            </li>

            <li>
              <Link href="/services/maintain-service">maintain-service</Link>
            </li>

            <li>
              <Link href="/services/resources-and-play-service">resources-and-pla-service</Link>
            </li>

            <li>
              <Link href="/services/suggest-service">sugges-service</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>
            <Link href={"/recommendations"}>Recommendations</Link>
          </h2>
          <ul>
            <li>
              <Link href={"/recommendations/developer-workflow"}>developer-workflow</Link>
            </li>
            <li>
              <Link href={"/recommendations/framework-recommendation"}>
                framework-recommendation
              </Link>
            </li>
            <li>
              <Link href={"/recommendations/run-time-checking-recommendation"}>
                run-time-checking-recommendation
              </Link>
            </li>
            <li>
              <Link href={"/recommendations/tsconfig-recommendation"}>tsconfig-recommendation</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

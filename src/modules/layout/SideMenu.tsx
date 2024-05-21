import Link from "next/link";
import { ThemeSelector } from "../themeSelector";

export const SideMenu = (p: { show: boolean }) => {
  return (
    <div className={`bg-base-200 h-screen block border-r ${p.show ? "" : "hidden"}`}>
      <ul className="menu">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <h2 className="menu-title">Articles</h2>
          <ul>
            <li>
              <Link href={"/articles/no-infer-article.page"}>no-infer-article.page.tsx</Link>
            </li>
            <li>
              <Link href={"/guides/type-predicates-article.page"}>
                type-predicates-article.page.tsx
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h2 className="menu-title">Guides</h2>
          <ul>
            <li>
              <Link href={"/guides/intro-to-generics-guide"}>intro-to-generics-guide</Link>
            </li>
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
          </ul>
        </li>
        <li>
          <h2 className="menu-title">Services</h2>
          <ul>
            <li>
              <Link href={""}>Service1</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2 className="menu-title">Recommendations</h2>
          <ul>
            <li>
              <Link href={"/recommendations/data-consumption-recommendation"}>
                data-consumption-recommendation
              </Link>
            </li>
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
        <li>
          <h2 className="menu-title">Articles</h2>
          <ul>
            <li>
              <Link href={""}>Article1</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href={"/our-recommendations"}>Our recommendations</Link>
        </li>

        <li>
          <Link href={"/test1"}>test1</Link>
        </li>
        <li>
          <Link href={"/test2"}>test2</Link>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};

import Link from "next/link";
import Router from "next/router";

type TLinksMapLink = { type: "link"; href: string; label: string; c?: true };
type TLinksMapLinkGroup = {
  type: "linkGroup";
  href: string;
  label: string;
  links: TLinksMapLink[];
};
type TLinksMap = (TLinksMapLink | TLinksMapLinkGroup)[];
const linksMap: TLinksMap = [
  { type: "link", href: "/", label: "Home" },
  { type: "link", href: "/services-overview", label: "Services Overview" },
  {
    type: "linkGroup",
    href: "/articles",
    label: "Articles",
    links: [
      { type: "link", href: "/no-infer", label: "NoInfer", c: true },
      {
        type: "link",
        href: "/no-unchecked-indexed-access",
        label: "tsconfig: noUncheckedIndexedAccess",
        c: true,
      },
      { type: "link", href: "/type-predicates-article", label: "type-predicates-article" },
    ],
  },
  {
    type: "linkGroup",
    href: "/guides",
    label: "Guides",
    links: [
      { type: "link", href: "/certainty-boundary", label: "certainty-boundary" },
      { type: "link", href: "/data-consumption", label: "data-consumption" },
      { type: "link", href: "/discriminated-unions", label: "discriminated-unions" },
      { type: "link", href: "/fetching-data-safely-react", label: "Fetching Data Safely In React" },
      { type: "link", href: "/generics-extend-explain", label: "generics-extend-explain" },
      { type: "link", href: "/generics-extend-visual", label: "generics-extend-visual" },
      { type: "link", href: "/infer-types-from-vars", label: "infer-types-from-vars" },
      { type: "link", href: "/intro-to-generics", label: "intro-to-generics" },
      { type: "link", href: "/name-your-data-types-well", label: "name-your-data-types-well" },
      { type: "link", href: "/never-assert", label: "never-assert" },
      { type: "link", href: "/smart-dumb-tight-ui", label: "smart-dumb-tight-ui" },
      { type: "link", href: "/tight-vs-loose-types", label: "tight-vs-loose-types" },
      { type: "link", href: "/ts-encourages-better", label: "ts-encourages-better" },
      { type: "link", href: "/type-inference", label: "type-inference" },
      { type: "link", href: "/where-will-it-error", label: "where-will-it-error?" },
      { type: "link", href: "/zod", label: "zod" },
    ],
  },
  {
    type: "linkGroup",
    href: "/recommendations",
    label: "Recommendations",
    links: [
      {
        type: "link",
        href: "/development-workflow",
        label: "Development Workflow Recommendation",
        c: true,
      },
      { type: "link", href: "/framework", label: "Framework Recommendation", c: true },
      {
        type: "link",
        href: "/run-time-checking",
        label: "Checking at run-time recommendation",
        c: true,
      },
      { type: "link", href: "/tsconfig", label: "tsconfig Recommendation" },
    ],
  },
  {
    type: "linkGroup",
    href: "/services",
    label: "Services",
    links: [
      { type: "link", href: "/advise-service", label: "advise-service" },
      { type: "link", href: "/audit-service", label: "audit-service" },
      { type: "link", href: "/build-service", label: "build-service" },
      { type: "link", href: "/contribute-service", label: "contribute-service" },
      { type: "link", href: "/guide-service", label: "guide-service" },
      { type: "link", href: "/implement-service", label: "implement-service" },
      { type: "link", href: "/maintain-service", label: "maintain-service" },
      { type: "link", href: "/resources-and-play-service", label: "resources-and-play-service" },
      { type: "link", href: "/suggest-service", label: "suggest-service" },
    ],
  },
] as const;

export const SideMenu = (p: { show: boolean }) => {
  return (
    <div
      className={`bg-base-200 min-w-72 h-screen overflow-y-scroll block border-r ${
        p.show ? "" : "hidden"
      }`}
    >
      <ul className="menu">
        {linksMap.map((item) => {
          if (item.type === "link")
            return (
              <li key={item.href}>
                <Link href={item.href} className={Router.route === item.href ? "active" : ""}>
                  {item.label} {item.c ? "!!!COMPLETE!!!" : ""}
                </Link>
              </li>
            );

          if (item.type === "linkGroup")
            return (
              <li key={item.href}>
                <details open>
                  <summary>
                    <Link
                      href={item.href}
                      className={Router.route === `${item.href}` ? "active" : ""}
                    >
                      {item.label}
                    </Link>
                  </summary>
                  <ul>
                    {item.links.map((child) => (
                      <li key={`${item.href}${child.href}`} className="active">
                        <Link
                          href={`${item.href}${child.href}`}
                          className={Router.route === `${item.href}${child.href}` ? "active" : ""}
                        >
                          {child.label} {child.c ? "!!!COMPLETE!!!" : ""}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

import Link from "next/link";
import { useRouter } from "next/router";
const c = true;
const sc = true;

type TLinksMapLink = { type: "link"; href: string; label: string; c?: true; sc?: true };
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
      { type: "link", href: "/no-infer", label: "NoInfer", c },
      {
        type: "link",
        href: "/no-unchecked-indexed-access",
        label: "tsconfig: noUncheckedIndexedAccess",
        c,
      },
      {
        type: "link",
        href: "/type-narrowing-and-predicates",
        label: "type-narrowing-and-predicates",
        c,
      },
    ],
  },
  {
    type: "linkGroup",
    href: "/guides",
    label: "Guides",
    links: [
      { type: "link", href: "/any-vs-unknown", label: "Any vs Unknown", c },
      { type: "link", href: "/async-equals-uncertainty", label: "Async Equals Uncertainty", c },
      { type: "link", href: "/categories-of-components", label: "Categories of Components", c },
      { type: "link", href: "/certainty-boundary", label: "certainty-boundary", c },
      {
        type: "link",
        href: "/conditional-types-explained",
        label: "Conditional Types Explained",
        c,
      },
      {
        type: "link",
        href: "/conditional-types-visualised",
        label: "Conditional Types Visualised",
        c,
      },
      { type: "link", href: "/discriminated-unions", label: "Discriminated Unions", c },
      { type: "link", href: "/facade-pattern", label: "Facade Pattern", c },
      {
        type: "link",
        href: "/fetching-data-safely-react",
        label: "Fetching Data Safely In React",
        c,
      },
      {
        type: "link",
        href: "/infer-types-from-vars-and-functions",
        label: "infer-types-from-vars-and-functions",
      },
      {
        type: "link",
        href: "/inference-and-utility-types",
        label: "Inference And Utility Types",
        c,
      },
      { type: "link", href: "/intro-to-generics", label: "intro-to-generics" },
      { type: "link", href: "/intro-to-zod", label: "Intro to Zod", c },
      { type: "link", href: "/ts-encourages-better", label: "ts-encourages-better" },
      { type: "link", href: "/type-assertion", label: "Type Assertion", c },
      {
        type: "link",
        href: "/well-named-types-and-variables",
        label: "Well Named Types And Variables",
        c,
      },
      { type: "link", href: "/where-will-it-error", label: "where-will-it-error?" },
      {
        type: "link",
        href: "/write-naive-components",
        label: "write-naive-components",
        c,
      },
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
        c,
      },
      { type: "link", href: "/framework", label: "Framework Recommendation", c },
      { type: "link", href: "/run-time-checking", label: "Checking at run-time recommendation", c },
      { type: "link", href: "/tsconfig", label: "tsconfig Recommendation", c },
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
  const router = useRouter();

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
                <Link href={item.href} className={router.route === item.href ? "active" : ""}>
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
                      className={router.route === `${item.href}` ? "active" : ""}
                    >
                      {item.label}
                    </Link>
                  </summary>
                  <ul>
                    {item.links.map((child) => (
                      <li key={`${item.href}${child.href}`} className="active">
                        <Link
                          href={`${item.href}${child.href}`}
                          className={router.route === `${item.href}${child.href}` ? "active" : ""}
                        >
                          {child.label}
                          {child.c ? " !!!COMPLETE!!!" : ""}
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

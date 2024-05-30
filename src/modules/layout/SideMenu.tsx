import Link from "next/link";
import { useRouter } from "next/router";
const comingSoon = true;

type TLinksMapLink = { type: "link"; href: string; label: string; comingSoon?: true };
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
      { type: "link", href: "/no-infer", label: "No Infer: TypeScript 5.4" },
      {
        type: "link",
        href: "/no-unchecked-indexed-access",
        label: "tsconfig: noUncheckedIndexedAccess",
      },
      {
        type: "link",
        href: "/type-narrowing-and-predicates",
        label: "Type Narrowing & Predicates",
      },
    ],
  },
  {
    type: "linkGroup",
    href: "/guides",
    label: "Guides",
    links: [
      { type: "link", href: "/any-vs-unknown", label: "Any vs Unknown" },
      { type: "link", href: "/async-equals-uncertainty", label: "Async Equals Uncertainty" },
      { type: "link", href: "/categories-of-components", label: "Categories of Components" },
      { type: "link", href: "/certainty-boundary", label: "certainty-boundary" },
      {
        type: "link",
        href: "/conditional-types-explained",
        label: "Conditional Types Explained",
      },
      {
        type: "link",
        href: "/conditional-types-visualised",
        label: "Conditional Types Visualised",
      },
      { type: "link", href: "/discriminated-unions", label: "Discriminated Unions" },
      { type: "link", href: "/facade-pattern", label: "Facade Pattern" },
      {
        type: "link",
        href: "/fetching-data-safely-react",
        label: "Fetching Data Safely In React",
      },
      {
        type: "link",
        href: "/inference-and-utility-types",
        label: "Inference And Utility Types",
      },
      { type: "link", href: "/intro-to-generics", label: "Intro To Generics" },
      { type: "link", href: "/intro-to-zod", label: "Intro to Zod" },
      {
        type: "link",
        href: "/typescript-improves-code",
        label: "TypeScript Improves Code",
        comingSoon,
      },
      { type: "link", href: "/type-assertion", label: "Type Assertion" },
      {
        type: "link",
        href: "/well-named-types-and-variables",
        label: "Well Named Types And Variables",
      },
      { type: "link", href: "/where-will-it-error", label: "Where Will It Error?" },
      {
        type: "link",
        href: "/write-naive-components",
        label: "Write Naive Components",
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
      },
      { type: "link", href: "/framework", label: "Framework Recommendation" },
      { type: "link", href: "/run-time-checking", label: "Checking at run-time recommendation" },
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

export const SideMenu = () => {
  const router = useRouter();

  return (
    <div className="h-full overflow-y-scroll">
      <ul className="menu bg-base-100">
        {linksMap.map((item) => {
          if (item.type === "link")
            return item.comingSoon ? (
              <></>
            ) : (
              <li key={item.href}>
                <Link href={item.href} className={router.route === item.href ? "active" : ""}>
                  {item.label} {item.comingSoon && "!!!HIDE!!!"}
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
                      <li key={`${item.href}${child.href}`}>
                        <Link
                          href={`${item.href}${child.href}`}
                          className={`${
                            router.route === `${item.href}${child.href}` ? "active" : ""
                          } flex justify-between`}
                        >
                          {child.label}
                          {child.comingSoon && (
                            <div className="badge badge-accent">Coming Soon</div>
                          )}
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
    // <div
    //   className={`bg-base-200 min-w-72 h-screen overflow-y-scroll block border-r ${
    //     p.show ? "" : "hidden"
    //   }`}
    // >
    // </div>
  );
};

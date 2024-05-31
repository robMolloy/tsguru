import Link from "next/link";
import { useRouter } from "next/router";
const comingSoon = true;

type TLinksMapLink = { type: "link"; href: string; label: string; hide?: true; comingSoon?: true };
type TLinksMapLinkGroup = {
  type: "linkGroup";
  href: string;
  label: string;
  links: TLinksMapLink[];
};
type TLinksMap = (TLinksMapLink | TLinksMapLinkGroup)[];
export const articlesLinks: TLinksMapLink[] = [
  { type: "link", href: "/articles/no-infer", label: "No Infer: TypeScript 5.4" },
  {
    type: "link",
    href: "/articles/no-unchecked-indexed-access",
    label: "tsconfig: noUncheckedIndexedAccess",
  },
  {
    type: "link",
    href: "/articles/type-narrowing-and-predicates",
    label: "Type Narrowing & Predicates",
  },
];

export const guidesLinks: TLinksMapLink[] = [
  { type: "link", href: "/guides/any-vs-unknown", label: "Any vs Unknown" },
  { type: "link", href: "/guides/async-equals-uncertainty", label: "Async Equals Uncertainty" },
  { type: "link", href: "/guides/categories-of-components", label: "Categories of Components" },
  { type: "link", href: "/guides/certainty-boundary", label: "certainty-boundary" },
  {
    type: "link",
    href: "/guides/conditional-types-explained",
    label: "Conditional Types Explained",
  },
  {
    type: "link",
    href: "/guides/conditional-types-visualised",
    label: "Conditional Types Visualised",
  },
  { type: "link", href: "/guides/discriminated-unions", label: "Discriminated Unions" },
  { type: "link", href: "/guides/facade-pattern", label: "Facade Pattern" },
  {
    type: "link",
    href: "/guides/fetching-data-safely-react",
    label: "Fetching Data Safely In React",
  },
  {
    type: "link",
    href: "/guides/inference-and-utility-types",
    label: "Inference And Utility Types",
  },
  { type: "link", href: "/guides/intro-to-generics", label: "Intro To Generics" },
  { type: "link", href: "/guides/intro-to-zod", label: "Intro to Zod" },
  {
    type: "link",
    href: "/guides/typescript-improves-code",
    label: "TypeScript Improves Code",
    comingSoon,
  },
  { type: "link", href: "/guides/type-assertion", label: "Type Assertion" },
  {
    type: "link",
    href: "/guides/well-named-types-and-variables",
    label: "Well Named Types And Variables",
  },
  { type: "link", href: "/guides/where-will-it-error", label: "Where Will It Error?" },
  {
    type: "link",
    href: "/guides/write-naive-components",
    label: "Write Naive Components",
  },
];

export const recommendationsLinks: TLinksMapLink[] = [
  {
    type: "link",
    href: "/recommendations/development-workflow",
    label: "Development Workflow Recommendation",
  },
  { type: "link", href: "/recommendations/framework", label: "Framework Recommendation" },
  {
    type: "link",
    href: "/recommendations/run-time-checking",
    label: "Checking at run-time recommendation",
  },
  { type: "link", href: "/recommendations/tsconfig", label: "tsconfig Recommendation" },
];

export const servicesLinks: TLinksMapLink[] = [
  { type: "link", href: "/services/advise-service", label: "advise-service" },
  { type: "link", href: "/services/audit-service", label: "audit-service" },
  { type: "link", href: "/services/build-service", label: "build-service" },
  { type: "link", href: "/services/contribute-service", label: "contribute-service" },
  { type: "link", href: "/services/guide-service", label: "guide-service" },
  { type: "link", href: "/services/implement-service", label: "implement-service" },
  { type: "link", href: "/services/maintain-service", label: "maintain-service" },
  {
    type: "link",
    href: "/services/resources-and-play-service",
    label: "resources-and-play-service",
  },
  { type: "link", href: "/services/suggest-service", label: "suggest-service" },
];

export const linksMap: TLinksMap = [
  { type: "link", href: "/", label: "Home" },
  { type: "link", href: "/services-overview", label: "Services Overview" },
  {
    type: "linkGroup",
    href: "/articles",
    label: "Articles",
    links: articlesLinks,
  },
  {
    type: "linkGroup",
    href: "/guides",
    label: "Guides",
    links: guidesLinks,
  },
  {
    type: "linkGroup",
    href: "/recommendations",
    label: "Recommendations",
    links: recommendationsLinks,
  },
  {
    type: "linkGroup",
    href: "/services",
    label: "Services",
    links: servicesLinks,
  },
] as const;
const DefaultListWrapper = (p: { children: React.ReactNode }) => <>{p.children}</>;
export const NavigationTree = (p: {
  linksMap: TLinksMap;
  ListWrapper?: React.FC<{ children: React.ReactNode }>;
}) => {
  const router = useRouter();
  const ListWrapper = p.ListWrapper ?? DefaultListWrapper;

  return (
    <div className="menu">
      <ListWrapper>
        <ul>
          {p.linksMap
            .filter((item) => !(item.type === "link" && item.hide))
            .map((item) => {
              if (item.type === "link")
                return (
                  <li key={item.href}>
                    <div
                      onClick={() => router.push(item.href)}
                      className={router.route === item.href ? "active" : ""}
                    >
                      {item.label}
                    </div>
                  </li>
                );

              if (item.type === "linkGroup")
                return (
                  <li key={item.href}>
                    <details open>
                      <summary>
                        <div
                          onClick={() => router.push(item.href)}
                          className={router.route === `${item.href}` ? "active" : ""}
                        >
                          {item.label}
                        </div>
                      </summary>
                      <ListWrapper>
                        <ul>
                          {item.links
                            .filter((child) => !(child.type === "link" && child.hide))
                            .map((child) => (
                              <li key={`${child.href}`}>
                                <div
                                  onClick={() => router.push(`${child.href}`)}
                                  className={`${
                                    router.route === `${child.href}` ? "active" : ""
                                  } flex justify-between`}
                                >
                                  {child.label}
                                  {child.comingSoon && (
                                    <div className="badge badge-accent text-nowrap overflow-ellipsis">
                                      Coming Soon
                                    </div>
                                  )}
                                </div>
                              </li>
                            ))}
                        </ul>
                      </ListWrapper>
                    </details>
                  </li>
                );
            })}
        </ul>
      </ListWrapper>
    </div>
  );
};

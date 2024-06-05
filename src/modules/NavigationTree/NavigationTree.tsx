import Link from "next/link";
import { useRouter } from "next/router";
const comingSoon = true;

type TLinksMapLink = { type: "link"; href: string; label: string; hide?: true; comingSoon?: true };
type TLinksMapLinkGroup = {
  type: "linkGroup";
  href: string;
  label: string;
  links: TLinksMapLink[];
  open: boolean;
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
  { type: "link", href: "/guides/certainty-boundary", label: "Certainty Boundary" },
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
  { type: "link", href: "/guides/error-categories", label: "Error Categories" },
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
    label: "Run-time Checking",
  },
  { type: "link", href: "/recommendations/tsconfig", label: "tsconfig Recommendation" },
];

export const servicesLinks: TLinksMapLink[] = [
  { type: "link", href: "/services", label: "All Services" },
  { type: "link", href: "/services/advise-service", label: "Advise Service" },
  { type: "link", href: "/services/audit-service", label: "Audit Service" },
  { type: "link", href: "/services/build-service", label: "Build Service" },
  { type: "link", href: "/services/contribute-service", label: "Contribute Service" },
  { type: "link", href: "/services/learn-service", label: "Learn Service", comingSoon },
  { type: "link", href: "/services/play-service", label: "Play Service", comingSoon },
  { type: "link", href: "/services/teach-service", label: "Teach Service", comingSoon },
];

export const linksMap: TLinksMap = [
  { type: "link", href: "/", label: "Home" },
  { type: "link", href: "/about-us", label: "About Us" },
  {
    type: "linkGroup",
    href: "/services",
    label: "Services",
    links: servicesLinks,
    open: true,
  },
  {
    type: "linkGroup",
    href: "/articles",
    label: "Articles",
    links: articlesLinks,
    open: false,
  },
  {
    type: "linkGroup",
    href: "/guides",
    label: "Guides",
    links: guidesLinks,
    open: false,
  },
  {
    type: "linkGroup",
    href: "/recommendations",
    label: "Recommendations",
    links: recommendationsLinks,
    open: false,
  },
] as const;
const FragmentWrapper = (p: { children: React.ReactNode }) => <>{p.children}</>;
const ParentWrapper = (p: { children: React.ReactNode }) => (
  <div className="menu">{p.children}</div>
);

const DropdownComponent = (p: {
  href: string;
  label: string;
  children: React.ReactNode;
  open: boolean;
}) => {
  const router = useRouter();

  return (
    <details open={p.open}>
      <summary>
        <div
          onClick={() => router.push(p.href)}
          className={router.route === `${p.href}` ? "active" : ""}
        >
          {p.label}
        </div>
      </summary>
      {p.children}
    </details>
  );
};

const SubmenuComponent = (p: {
  href: string;
  label: string;
  children: React.ReactNode;
  open: boolean;
}) => {
  const router = useRouter();
  return (
    <>
      <Link className={`${router.route === `${p.href}` ? "active" : ""}`} href={p.href}>
        {p.label}
      </Link>
      {p.children}
    </>
  );
};

export const NavigationTree = (p: {
  linksMap: TLinksMap;
  ListWrapper?: React.FC<{ children: React.ReactNode }>;
  type?: "dropdown" | "submenu";
}) => {
  const type = p.type ?? "dropdown";
  const router = useRouter();
  const ListWrapper = p.ListWrapper ?? FragmentWrapper;
  const ParentComponent = type === "dropdown" ? DropdownComponent : SubmenuComponent;

  return (
    <div className="menu">
      <ListWrapper>
        <ul>
          {p.linksMap
            .filter((item) => !(item.type === "link" && item.hide))
            .map((item) => {
              if (item.type === "link")
                return (
                  <li key={`${item.href}`}>
                    <div
                      onClick={() => router.push(`${item.href}`)}
                      className={`${
                        router.route === `${item.href}` ? "active" : ""
                      } flex justify-between`}
                    >
                      <span className="text-nowrap">{item.label}</span>
                      {item.comingSoon && (
                        <div className="badge badge-accent text-nowrap">Coming Soon</div>
                      )}
                    </div>
                  </li>
                );

              if (item.type === "linkGroup")
                return (
                  <li key={`${item.href}-child`}>
                    <ParentComponent label={item.label} href={item.href} open={item.open}>
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
                                  <span className="text-nowrap">{child.label}</span>
                                  {child.comingSoon && (
                                    <div className="badge badge-accent text-nowrap">
                                      Coming Soon
                                    </div>
                                  )}
                                </div>
                              </li>
                            ))}
                        </ul>
                      </ListWrapper>
                    </ParentComponent>
                  </li>
                );
            })}
        </ul>
      </ListWrapper>
    </div>
  );
};

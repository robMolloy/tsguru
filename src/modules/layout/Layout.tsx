import Link from "next/link";
// import { ThemeSelector } from "../themeSelector";
import {
  NavigationTree,
  articlesLinks,
  guidesLinks,
  linksMap,
  recommendationsLinks,
  servicesLinks,
} from "@/modules/NavigationTree";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CloseDrawerWrapper: React.FC<{ children?: React.ReactNode }> = (p) => {
  return (
    <label htmlFor="sidebar" aria-label="close sidebar" className="drawer-overlay">
      {p.children}
    </label>
  );
};
const OpenDrawerWrapper: React.FC<{ children?: React.ReactNode }> = (p) => {
  return (
    <label htmlFor="sidebar" aria-label="open sidebar" className="btn btn-square btn-ghost">
      {p.children}
    </label>
  );
};

const NavBarContainer = (p: { children: React.ReactNode }) => {
  return <div className="w-full navbar bg-base-300 border-b">{p.children}</div>;
};

const BurgerMenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block w-6 h-6 stroke-current"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
);

const NavBarDropdown = (p: { children: React.ReactNode; label: string }) => {
  return (
    <div className="dropdown dropdown-start dropdown-bottom">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <div>{p.label} &#x25BC;</div>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content mt-1 z-[1] p-0 shadow bg-base-100 rounded-box border"
        style={{ opacity: "0.94" }}
      >
        <div className="max-h-[75vh] overflow-y-scroll rounded-box">{p.children}</div>
      </div>
    </div>
  );
};

function useFlicker<T>(x: T) {
  const [show, setShow] = useState(true);
  useEffect(() => setShow(false), [x]);
  useEffect(() => {
    if (!show) setShow(true);
  }, [show]);

  return { show };
}

export const Layout = (p: { children: React.ReactNode }) => {
  const router = useRouter();
  const { show: showTabsInBar } = useFlicker(router.route);

  return (
    <div className="drawer">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <NavBarContainer>
          <div className="flex flex-col w-full">
            <div className="flex w-full">
              <div className="block sm:hidden">
                <OpenDrawerWrapper>
                  <BurgerMenuIcon />
                </OpenDrawerWrapper>
              </div>

              <div className="flex-1">
                <Link href="/" className="text-xl btn btn-ghost">
                  TS Gurus
                </Link>
              </div>
              <div className="flex gap-4">
                <div className="hidden sm:block">
                  <Link href="/services" className="btn btn-ghost">
                    View Services
                  </Link>
                </div>
                <Link href="/" className="btn btn-primary ">
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex w-full">
              {showTabsInBar && (
                <>
                  <NavBarDropdown label="Articles">
                    <NavigationTree
                      linksMap={[
                        {
                          type: "linkGroup",
                          label: "All Articles",
                          href: "/articles",
                          links: articlesLinks,
                        },
                      ]}
                      type="submenu"
                    />
                  </NavBarDropdown>
                  <NavBarDropdown label="Guides">
                    <NavigationTree
                      linksMap={(() => {
                        const links = linksMap.find((x) => x.href === "/guides");
                        return [links as NonNullable<typeof links>];
                      })()}
                      type="submenu"
                    />
                  </NavBarDropdown>
                  <NavBarDropdown label="Recommendations">
                    <NavigationTree
                      linksMap={(() => {
                        const links = linksMap.find((x) => x.href === "/recommendations");
                        return [links as NonNullable<typeof links>];
                      })()}
                      type="submenu"
                    />
                  </NavBarDropdown>
                  <NavBarDropdown label="Services">
                    <NavigationTree
                      linksMap={[
                        {
                          type: "linkGroup",
                          label: "All Services",
                          href: "/services",
                          links: servicesLinks,
                        },
                      ]}
                      type="submenu"
                    />
                  </NavBarDropdown>
                  {/* <NavBarDropdown label="Themes">
                    <div className="p-2">
                      <div className="overflow-scroll">
                        <ThemeSelector />
                      </div>
                    </div>
                  </NavBarDropdown> */}
                </>
              )}
              <button className="opacity-0 btn" disabled></button>
            </div>
          </div>
        </NavBarContainer>
        {p.children}
      </div>
      <div className="drawer-side">
        <CloseDrawerWrapper />

        <div className="p-1 m-0 min-w-80 min-h-full bg-base-100 border-r">
          <NavigationTree linksMap={linksMap} ListWrapper={CloseDrawerWrapper} />
        </div>
      </div>
    </div>
  );
};

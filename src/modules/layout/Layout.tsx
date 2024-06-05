import Link from "next/link";
import { NavigationTree, linksMap } from "@/modules/NavigationTree";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer, Typography } from "@/components";
import { GetInTouchForm } from "../getInTouchForm";

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
  return (
    <div className="sticky top-0 z-[98]">
      <div className="navbar w-full border-b bg-base-300">{p.children}</div>
    </div>
  );
};

const BurgerMenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block h-6 w-6 stroke-current"
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
    <div className="dropdown-start dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <div>{p.label} &#x25BC;</div>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] mt-1 rounded-box border bg-base-100 p-0 shadow"
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
    <>
      <div className="drawer">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <NavBarContainer>
            <div className="flex w-full flex-col">
              <div className="flex w-full">
                <div className="block sm:hidden">
                  <OpenDrawerWrapper>
                    <BurgerMenuIcon />
                  </OpenDrawerWrapper>
                </div>

                <div className="flex-1">
                  <Link href="/" className="btn btn-ghost text-xl">
                    TS Gurus
                  </Link>
                </div>
                <div className="flex gap-4">
                  <div className="hidden sm:block">
                    <Link href="/services" className="btn btn-ghost">
                      View Services
                    </Link>
                  </div>
                  <Link href="#get-in-touch-form" className="btn btn-primary">
                    Get in touch
                  </Link>
                </div>
              </div>
              <div className="hidden w-full sm:flex">
                {showTabsInBar && (
                  <>
                    <NavBarDropdown label="Services">
                      <NavigationTree
                        linksMap={(() => {
                          const links = linksMap.find(
                            (x) => x.href === "/services" && x.type === "linkGroup",
                          );

                          return [links as NonNullable<typeof links>];
                        })()}
                        type="submenu"
                      />
                    </NavBarDropdown>
                    <NavBarDropdown label="Articles">
                      <NavigationTree
                        linksMap={(() => {
                          const links = linksMap.find(
                            (x) => x.href === "/articles" && x.type === "linkGroup",
                          );
                          return [links as NonNullable<typeof links>];
                        })()}
                        type="submenu"
                      />
                    </NavBarDropdown>
                    <NavBarDropdown label="Guides">
                      <NavigationTree
                        linksMap={(() => {
                          const links = linksMap.find(
                            (x) => x.href === "/guides" && x.type === "linkGroup",
                          );
                          return [links as NonNullable<typeof links>];
                        })()}
                        type="submenu"
                      />
                    </NavBarDropdown>
                    <NavBarDropdown label="Recommendations">
                      <NavigationTree
                        linksMap={(() => {
                          const links = linksMap.find(
                            (x) => x.href === "/recommendations" && x.type === "linkGroup",
                          );
                          return [links as NonNullable<typeof links>];
                        })()}
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
                <button className="btn opacity-0" disabled></button>
              </div>
            </div>
          </NavBarContainer>
          {p.children}
        </div>
        <div className="drawer-side z-[99]">
          <CloseDrawerWrapper />

          <div className="m-0 min-h-full min-w-80 border-r bg-base-100 p-1">
            <NavigationTree linksMap={linksMap} ListWrapper={CloseDrawerWrapper} />
          </div>
        </div>
      </div>
      <Footer>
        <Typography>
          <h2>Get in touch!</h2>
          <p>
            We welcome all enquiries! For a detailed discussion on how we can tailor our services to
            your unique situation, please contact us directly and one of our experts will get back
            to you. We are here to provide personalized guidance and support to ensure your
            project's success.
          </p>

          <GetInTouchForm onSubmitFail={() => {}} onSubmitSuccess={() => {}} />
        </Typography>
      </Footer>
    </>
  );
};

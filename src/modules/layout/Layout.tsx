import Link from "next/link";
import { ThemeSelector } from "../themeSelector";
import { NavigationTree } from "@/modules/NavigationTree";

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
      <div tabIndex={0} className="dropdown-content mt-1 z-[1] p-2 shadow bg-neutral rounded-box">
        <div className="h-[75vh] overflow-y-scroll rounded-box">{p.children}</div>
      </div>
    </div>
  );
};

export const Layout = (p: { children: React.ReactNode }) => {
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
                <Link href="/" className="btn btn-ghost text-xl">
                  TS Gurus
                </Link>
              </div>
              <div>
                <Link href="/services" className="btn btn-ghost ">
                  View Services
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex w-full">
              <NavBarDropdown label="Articles">
                <ThemeSelector />
              </NavBarDropdown>
              <NavBarDropdown label="Guides">
                <ThemeSelector />
              </NavBarDropdown>
              <NavBarDropdown label="Recommendations">
                <ThemeSelector />
              </NavBarDropdown>
              <NavBarDropdown label="services">
                <ThemeSelector />
              </NavBarDropdown>
            </div>
          </div>
        </NavBarContainer>
        {p.children}
      </div>
      <div className="drawer-side">
        <CloseDrawerWrapper />
        <div className="menu p-2 m-0 w-80 min-h-full bg-base-100 border-r">
          <NavigationTree ListWrapper={CloseDrawerWrapper} />
        </div>
      </div>
    </div>
  );
};

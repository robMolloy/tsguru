import Link from "next/link";
import { useRouter } from "next/router";
import { SideMenu } from ".";
import { ThemeSelector } from "../themeSelector";

const CloseDrawerWrapper: React.FC<{ children?: React.ReactNode }> = (p) => {
  return (
    <label htmlFor="sidebar" aria-label="close sidebar" className="drawer-overlay">
      {p.children}
    </label>
  );
};

export const Layout = (p: { children: React.ReactNode }) => {
  return (
    <div className="drawer">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none">
            <label htmlFor="sidebar" aria-label="open sidebar" className="btn btn-square btn-ghost">
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
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link href="/" className="btn btn-ghost text-xl">
              TS Gurus
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="flex">
              <li>
                <div className="dropdown dropdown-end dropdown-bottom">
                  <div tabIndex={0} role="button" className="btn btn-ghost">
                    <div>Themes &#x25BC;</div>
                  </div>
                  <div
                    tabIndex={0}
                    className="dropdown-content mt-1 z-[1] p-2 shadow bg-neutral rounded-box"
                  >
                    <div className="h-[75vh] overflow-y-scroll rounded-box">
                      <ThemeSelector />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {p.children}
      </div>
      <div className="drawer-side">
        <CloseDrawerWrapper />
        <div className="menu p-0 m-0 w-80 min-h-full bg-base-100 border-r">
          <SideMenu CloseDrawerWrapper={CloseDrawerWrapper} />
        </div>
      </div>
    </div>
  );
};

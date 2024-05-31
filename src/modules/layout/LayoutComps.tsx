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

const NavBarDropdown = (p: { children: React.ReactNode; label: string }) => {
  return (
    <div className="dropdown dropdown-start dropdown-bottom">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <div>{p.label} &#x25BC;</div>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content mt-[-5px] z-[1] p-2 shadow bg-base-300 rounded-box border"
      >
        <div className="overflow-y-scroll rounded-box" style={{ height: "75vh" }}>
          {p.children}
        </div>
      </div>
    </div>
  );
};

const BurgerMenuIcon = () => {
  return (
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
};

const NavBarContainer = (p: { children: React.ReactNode }) => (
  <div className="w-full navbar bg-base-300 border-b flex flex-col">{p.children}</div>
);

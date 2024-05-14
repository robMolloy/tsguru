import { useState } from "react";
import { NavBar, SideMenu } from ".";

export type TLayoutProps = {
  children: React.ReactNode;
};

export const Layout = (p: TLayoutProps) => {
  const [showSideMenu, setShowSideMenu] = useState(true);

  return (
    <>
      <div className="flex">
        <SideMenu show={showSideMenu} />
        <div className="flex-1 h-screen overflow-y-scroll">
          <NavBar onToggleClick={() => setShowSideMenu(!showSideMenu)} />
          <main className={`px-8 pt-2`}>
            {p.children}
            {/* <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div>
            <div>askdjaskld</div> */}
          </main>
        </div>
      </div>
    </>
  );
};

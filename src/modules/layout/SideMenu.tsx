import Link from "next/link";
import { ThemeSelector } from "../themeSelector";

export const SideMenu = (p: { show: boolean }) => {
  return (
    <div className={`bg-base-200 h-screen block border-r ${p.show ? "" : "hidden"}`}>
      <ul className="menu">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/our-recommendations"}>Our recommendations</Link>
        </li>
        <li>
          <Link href={"/generics/generics-conditionals-cheatsheet"}>
            Generics Conditionals -cheatsheet
          </Link>
        </li>
        <li>
          <Link href={"/generics/generics-conditionals-visualised"}>
            generics-conditionals-visualised
          </Link>
        </li>
        <li>
          <Link href={"/test1"}>test1</Link>
        </li>
        <li>
          <Link href={"/test2"}>test2</Link>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
        <li>
          <h2 className="menu-title">Guides</h2>
          <ul>
            <li>
              <Link href={"/test1"}>test1</Link>
            </li>
            <li>
              <Link href={"/test2"}>test2</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

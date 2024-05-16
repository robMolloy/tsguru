import Link from "next/link";

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
          <Link href={"/generics-cheatsheet"}>Generics Cheatsheet</Link>
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
      </ul>
    </div>
  );
};

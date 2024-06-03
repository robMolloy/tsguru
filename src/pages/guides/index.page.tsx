import { Typography } from "@/components";
import { guidesLinks } from "@/modules/NavigationTree";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Guides</h1>

      <h2>Available guides</h2>

      <p>
        We have created guides that encourage TypeScript best practices and novel approaches to
        development in the TS Gurus style. All our guides are available for free;
      </p>

      <ul>
        {guidesLinks.map((x) => (
          <li key={x.href}>
            <Link href={x.href}>{x.label}</Link>
          </li>
        ))}
      </ul>
    </Typography>
  );
}

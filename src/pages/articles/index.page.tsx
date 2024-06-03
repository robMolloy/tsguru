import { Typography } from "@/components";
import { articlesLinks } from "@/modules/NavigationTree";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Articles</h1>

      <h2>Available articles</h2>

      <p>
        We have created articles highlighting the latests TypeScript news and updates in the
        TypeScript ecosystem all available for free.
      </p>
      <ul>
        {articlesLinks.map((x) => (
          <li key={x.href}>
            <Link href={x.href}>{x.label}</Link>
          </li>
        ))}
      </ul>
    </Typography>
  );
}

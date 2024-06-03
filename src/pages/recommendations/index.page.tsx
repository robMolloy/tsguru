import { Typography } from "@/components";
import { guidesLinks, recommendationsLinks } from "@/modules/NavigationTree";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Recommendations</h1>

      <h2>Available recommendations</h2>

      <p>
        We have developed a series of specific and concise recommendations aimed at promoting best
        practices in both setup-related tasks and daily workflows. Our goal is to provide clear,
        actionable guidance to help streamline processes and enhance efficiency.
      </p>
      <p>
        We are pleased to offer all of our detailed guides free of charge, ensuring that everyone
        has access to valuable insights and methodologies to improve their work.
      </p>

      <ul>
        {recommendationsLinks.map((x) => (
          <li key={x.href}>
            <Link href={x.href}>{x.label}</Link>
          </li>
        ))}
      </ul>
    </Typography>
  );
}

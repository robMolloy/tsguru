import { Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Services</h1>

      <h2>Available services</h2>
      <p>
        TS Gurus offers the following paid services alongside many articles, guides and
        recommendations that are freely available;
      </p>
      <ul>
        <li>
          <Link href="/services/advise-service">Advise</Link>
        </li>
        <li>
          <Link href="/services/audit-service ">Audit</Link>
        </li>
        <li>
          <Link href="/services/build-service">Build</Link>
        </li>
        <li>
          <Link href="/services/contribute-service">Contribute</Link>
        </li>
      </ul>

      <p>
        Any of these services can be customized to meet the specific needs and requirements of each
        client. We take pride in offering flexible and adaptable solutions that cater to a wide
        range of project demands and business objectives.
      </p>
    </Typography>
  );
}

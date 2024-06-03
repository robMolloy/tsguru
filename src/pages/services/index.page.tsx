import { Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Services</h1>

      <h2>Available services</h2>
      <p>
        TS Gurus offers the following paid services alongside the many articles guides and
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
    </Typography>
  );
}

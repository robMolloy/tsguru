import { Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <div>infer-types-from-vars</div>
      <div>decare/assert types (from vars) at the top of the app and infer from it </div>
      <Link href="guides/where-will-it-error">Where will it error</Link>
    </Typography>
  );
}

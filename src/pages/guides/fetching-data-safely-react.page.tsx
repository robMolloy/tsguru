import { Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography>
      <h1>Fetching Data Safely In React</h1>

      <h2>Intro</h2>
      <p>
        You may want to read about this{" "}
        <Link href="/recommendations/fetching-data-safely-react">
          Fetching Data Safely In React
        </Link>{" "}
        which goes into more detail about how the validation works.
      </p>

      <p>A primary reason why apps go wrong </p>
    </Typography>
  );
}

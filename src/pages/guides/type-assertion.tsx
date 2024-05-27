import { Typography } from "@/components";

export default function Page() {
  return (
    <Typography>
      <h1>Type Assertion</h1>

      <h2>When should you assert the type?</h2>
      <p>Never.</p>

      <h2>Are you sure?</h2>
      <p>Yeah.</p>

      <h2>Even in development?</h2>
      <p>
        Fine, sometimes in development. But it's just a quick to write a schema validation so why
        would you do that?
      </p>

      <h2>Did this really need to be a standalone article?</h2>
      <p>Perhaps not, but I hope it emphasised the point.</p>
    </Typography>
  );
}

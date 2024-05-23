import { Typography } from "@/components";

export default function Page() {
  return (
    <Typography>
      <p>
        The key to good TypeScript code is often to infer values instead of creating the types
        yourself. However, there are scenarios where you may not have direct access to the types.
        When this is the case there ore often TypeScript utility classes that you can use.
      </p>
      https://www.typescriptlang.org/docs/handbook/utility-types.html
    </Typography>
  );
}

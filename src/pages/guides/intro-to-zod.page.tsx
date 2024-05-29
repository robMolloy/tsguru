import { CodeBlock, Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Intro To Zod</h1>

      <h2>What is Zod?</h2>
      <p>
        Zod is a schema-validation library that allows developers to define schemas for data and
        acts as a set of tools for validation and type inference. Importantly, unlike the TypeScript
        type-system that gives you errors in your editor, Zod schemas can be used to validate data
        at runtime, ensuring that any variables adhere to their specified type.
      </p>
      <p>
        Zod is particularly useful for validating API payloads, form data, and other data structures
        in a TypeScript project. Some of those uses are explained by TS Gurus in the following
        articles, and many other articles also use Zod;
        <ul>
          <li>
            <Link href="/articles/type-narrowing-and-predicates">Type Narrowing & Predicates</Link>,
          </li>
          <li>
            <Link href="/recommendations/run-time-checking">Run-time checking</Link>
          </li>
          <li>
            <Link href="/guides/fetching-data-safely-react">Fetching Data Safely In React</Link>
          </li>
        </ul>
      </p>

      <h2>Why Zod?</h2>
      <p>
        Other equivalents are available but Zod is an incredibly reliable, well-maintained library
        as is proved but it's incredibly good <a href="https://zod.dev/">docs</a>. It also has a
        large community that creates excellent third-party packages. As we encourage Zod's use so
        heavily it feels sensible that there is a standalone article.
      </p>

      <h2>How to use Zod</h2>
      <p>
        Using Zod is as simple as defining a schema, then check the data, whether primitive or an
        object, against the schema in order to determine if the data conforms to that schema.
      </p>
      <p>
        There are two ways to check/parse the data using the schema, with either{" "}
        <code>{`schema.parse({ some: "data" })`}</code> or{" "}
        <code>{`schema.safeParse({ some: "data" })`}</code>. Using <code>.parse()</code> immediately
        throws an error if the data doesn't conform to the schema, whereas <code>.safeParse()</code>{" "}
        returns an object that can be used to handle the error more gracefully if it does fail. As
        such we generally use <code>.safeParse()</code>.
      </p>

      <p>Below, is a basic example;</p>

      <CodeBlock>{`import { z } from 'zod';
// Define a schema
const UserSchema = z.object({
  name: z.string(),
  age: z.number().int().positive(),
  email: z.string().email(),
  isAdmin: z.boolean().optional()
});

// Validate data
const result = UserSchema.safeParse({
  name: "Alice",
  age: 30,
  email: "alice@example.com"
});

if (result.success) {
  // Data is valid
  const user = result.data;
  console.log("Valid user:", user);
} else {
  // Data is invalid
  console.error("Validation errors:", result.error.errors);
}`}</CodeBlock>
      <p>This is a simple use-case, but Zod can be used for data of any level of complexity.</p>

      <h2>Additional resources</h2>
      <p>
        If you want to know more about Zod we would suggest you read the docs, or the other articles
        on this site. But even more importantly, why not install it on your site today, using{" "}
        <code>npm i zod</code> and start making the most of all it's incredible features and the
        advantages they bring.
      </p>
      <p>
        If you're still not quite sure yet, why not have a play around with{" "}
        <a href="https://zod-sandbox.vercel.app/">Zod sandbox</a>? Which is a simple tool for
        learning and testing Zod schema validation functionalities.
      </p>
    </Typography>
  );
}

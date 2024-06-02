import { Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Error Categories</h1>
      <h2>Intro</h2>
      <p>
        TypeScript can help mitigate a wide range of errors. When TypeScript is adopted, even with
        minimal strictness, some error categories can be entirely eliminated. However, this doesn't
        mean that all types of errors are resolved.
      </p>
      <p>
        Below are common errors that may still occur when TypeScript is adopted without following
        best practices.
      </p>
      <h2>Undue certainty</h2>
      <p>
        This error typically occurs when a developer asserts a type without performing the necessary
        checks to ensure that the assertion is valid. It often results in the program assuming a
        variable is of a certain type when, in reality, it might not be. This undue certainty can
        lead to runtime errors if the assumed type does not match the actual type of the variable.
      </p>
      <p>
        For example, using type assertions to tell TypeScript that a variable is of a specific type
        without verifying that assumption can create issues. This is often seen with the{" "}
        <code>as</code> keyword, where a developer might assert that an object is of a particular
        type to bypass the compiler's type checks. While this can silence TypeScript's warnings, it
        can also introduce hard-to-detect bugs if the actual type differs from the asserted type.
      </p>
      <p>For more information on this topic please read;</p>
      <ul>
        <li>
          <Link href="/recommendations/run-time-checking">Run-time checking</Link>
        </li>
        <li>
          <Link href="/guides/fetching-data-safely-react">Fetching Data Safely In React</Link>
        </li>
      </ul>
      <h2>
        Undue certainty <code>any</code>
      </h2>
      <p>
        This issue represents a specific, yet highly common, cause of the TypeScript undue certainty
        error. It occurs when a value is assigned the type <code>any</code>, which effectively
        disables TypeScript's type checking for that value. As a result, the value can be mistakenly
        treated as a string when it is, in fact, a number, an object, or another type entirely.
      </p>
      <p>
        This misuse of the any type can lead to significant runtime errors because the true nature
        of the value is not properly enforced or checked by the TypeScript compiler. By allowing a
        value to be interpreted as any type, developers lose the benefits of TypeScript's static
        type checking, increasing the risk of type-related bugs and unpredictable behavior in the
        application.
      </p>
      <p>
        The dangers of using <code>any</code> are documented in the following article;
      </p>
      <ul>
        <li>
          <Link href="/guides/any-vs-unknown">Any vs Unknown</Link>
        </li>
      </ul>

      <h2>Misconfigured tsconfig.json</h2>
      <p>
        The TypeScript configuration file (tsconfig.json) controls the compiler options and project
        settings. A misconfigured tsconfig.json can lead to missed errors or unnecessary
        restrictions. For instance, not enabling strict mode <code>"strict": true</code> can allow
        several potential errors to go unchecked.
      </p>

      <h2>
        Possible <code>undefined</code>
      </h2>
      <p>
        This is one potential type of error caused by misconfigured tsconfig.json. It can occur when
        accessing array elements without first ensuring that the index is within the length of the
        array. TypeScript should treat array accesses as potentially returning undefined, forcing
        developers to handle the possibility of undefined values explicitly.
      </p>
      <p>For more about how to deal with this problem;</p>
      <ul>
        <li>
          <Link href="/articles/no-unchecked-indexed-access">
            tsconfig: noUncheckedIndexedAccess
          </Link>
        </li>
      </ul>

      <h2>Inaccessible typings</h2>
      <p>
        When working with a third-party library in TypeScript, you might encounter situations where
        you need to provide a type for a function from that library, but the type information is not
        readily accessible or available. This can create difficulties but there always workarounds -
        you can read the "Third-party libraries" section of the following article;
      </p>
      <ul>
        <li>
          <Link href="/guides/inference-and-utility-types">Inference and Utility Types</Link>
        </li>
      </ul>

      <h2>Summary</h2>
      <p>
        By following best practices and avoiding these common mistakes, developers can fully
        leverage the power of TypeScript to create more reliable, maintainable, and robust
        applications.
      </p>
    </Typography>
  );
}

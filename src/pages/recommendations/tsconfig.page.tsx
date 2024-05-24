import { CodeBlock, Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography>
      <h1>tsconfig Recommendations</h1>

      <h2>Intro</h2>
      <p>
        As a general rule, it is best not mess too much with any out-of-the-box setups that come
        with your tools. But sometimes, you need to tweak things a bit, and it's best if you have a
        general understanding of what each config option does before changing it. This article
        should help.
      </p>
      <p>
        Learn more about how the compiler can help when you're writing code by reviewing{" "}
        <Link href="/recommendations/development-workflow">TS Development Workflow</Link>
      </p>

      <h2>Initial setup</h2>
      <p>Below is the initial tsconfig for a new NextJS project.</p>
      <CodeBlock>{`{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
`}</CodeBlock>
      <p>This is an acceptable basic setup but let's make a few changes.</p>

      <h2>"allowJs": true,</h2>
      <p>
        It's unlikely that developers will start writing JavaScript in a TypeScript project, but why
        take the risk? Let's delete <code>"allowJs": true,</code> and this will default to false.
      </p>

      <h2>"noUncheckedIndexedAccess": true,</h2>
      <p>
        This will help catch potential undefined errors when accessing object properties. For more
        info read this article where we go into more detail{" "}
        <Link href="/articles/no-unchecked-indexed-access">tsconfig: noUncheckedIndexedAccess</Link>
      </p>
      <h2>"strict": true,</h2>
      <p>
        <code>"strict": true,</code> enforces a set of helpful and sensible rules. These are easy to
        conform to from the start of the project if you have a good understanding of TypeScript.
        However, the migration process is a lot more effort once a many lines of code have been
        written that break this set of rules.
      </p>

      <h2>"noImplicitAny": false,</h2>
      <p>
        Please please please (let me get what I want), don't add{" "}
        <code>"noImplicitAny": false,</code> to your config. This is one of the major ways that the
        typing system can be completely undermined by just a small amount of code. There really
        shouldn't be any <code>any</code>s in your codebase if you value the benefits of TypeScript.
      </p>

      <h2>Be careful...</h2>
      <p>
        There are many different tsconfig settings, and all can be reviewed in the TypeScript docs
        at{" "}
        <a href="https://www.typescriptlang.org/tsconfig/">
          https://www.typescriptlang.org/tsconfig/
        </a>
        . As an approach to learning, it is best to either play around with the tsconfig settings
        (preferably in a project that doesn't matter too much), or just stick with the basic or this
        recommended setup and make changes when a suitable use-case comes along. For most scenarios
        the recommendations here should be plenty.
      </p>

      <h2>Finally</h2>
      <p>
        Don't forget to read about our recommended workflow as reference in the intro{" "}
        <Link href="/recommendations/development-workflow">TS Development Workflow</Link>
      </p>
    </Typography>
  );
}

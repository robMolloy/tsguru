import { CodeBlock, CodeEditor, Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Well Named Types And Variables</h1>

      <h2>Why?</h2>
      <p>
        Naming variables doesn't really matter. A computer doesn't care about the name of a
        variable, in fact, once compiled/minified etc. it likely has a different name anyway. So
        naming developers is for humans and there are two primary advantages to naming things well
      </p>
      <p>
        Readability - code which has badly-named variables can feel hard-to-read and make working in
        a codebase unenjoyable and difficult to make changes.
      </p>
      <p>
        Data awareness - unfortunately, many TypeScript developers don't think about the underlying
        data structures that are powering their application. By spending a sensible amount of time
        thinking about naming variables and types this forces developers to think about the data
        they are working with.
      </p>

      <h2>One simple question</h2>
      <p>
        We are all familiar with the developer that is so obsessed with naming variables perfectly
        that they never actually write any code. But just as infuriatingly, can be types being named
        something that they are not. To get around this we suggest you ask one simple question...
      </p>

      <p className="flex justify-center text-center">
        <h2>Does the name of this type accurately describe what it represents?</h2>
      </p>

      <p>
        It's a simple (and quite an odd) question, but one that people so often don't ask
        themselves. So any time you're naming a new variable make sure you're answering yes.
      </p>

      <h2>Examples</h2>
      <p>First let's look at a simple example that contains a common mistake.</p>

      <CodeBlock>{`const cats = ["fluffy", "simba", "bagpuss"]; // wrong!!!`}</CodeBlock>

      <p>
        But why is this wrong? Let's say that we are getting a list of cats from a cat database, we
        will then call one row in a table a <code>cat</code> and multiple rows <code>cats</code>.
        i.e.;
      </p>

      <CodeBlock>{`const cats = [
  { id: "id1", name: "fluffy", age: 5 },
  { id: "id2", name: "simba", age: 4 },
  { id: "id3", name: "bagpuss", age: 8 },
];
const catNames = ["fluffy", "simba", "bagpuss"];`}</CodeBlock>

      <p>
        So this is now much more appropriately named as it accurately reflects the data structures
        that underly the application.
      </p>

      <p>
        Now, let's look at some types. We are using a prefix of <code>T</code> to name our types but
        this entirely optional if you prefer to leave it out, then feel free;
      </p>
      <p>
        <code>"fluffy" | "simba" | "bagpuss"</code>, should this type be <code>TCatName</code> or{" "}
        <code>TCatNames</code>. Intuitively, you may think <code>TCatNames</code>, but this is
        actually wrong - let's look at why;
      </p>

      <CodeBlock>{`const catName: TCatName = "fluffy";
const catNames: TCatNames = ["fluffy", "simba"];

// where the types would be

type TCatName = "fluffy" | "simba" | "bagpuss";
type TCatNames = TCatName[];`}</CodeBlock>

      <p>
        So if you're ever unsure if a type is named correctly, just declare a well-named variable
        and declare the type as a test to check that the names are consistent. At TS Gurus we call
        this "type-variables naming consistency", but to be honest it's just common-sense once
        you've learned the common mistakes.
      </p>

      <p>
        Now let's return to our cat example and think about how to name items correctly. Here is the
        data in our database (note that the user will not pass the createdAt and updatedAt fields,
        this will be assigned by the database);
      </p>

      <CodeBlock>{`[
  { id: "id1", name: "fluffy", age: 5, createdAt: 1680219151, updatedAt: 1682897551 },
  { id: "id2", name: "simba", age: 4, createdAt: 1711668751, updatedAt: 1711841551 },
  { id: "id3", name: "bagpuss", age: 8, createdAt: 1716939153, updatedAt: 1716939153 },
]`}</CodeBlock>

      <p>
        And now let's think about a <code>createNewCat()</code> function. It may be tempting to
        write the following;
      </p>
      <CodeBlock>{`const createNewCat = (x: TCat) => {
  // doSomething
}`}</CodeBlock>

      <p>Again, this is wrong, but why?</p>
      <CodeBlock>{`const cat = { id: "id1", name: "fluffy", age: 5, createdAt: 1680219151, updatedAt: 1682897551 };
const catSeed = { id: "id1", name: "fluffy", age: 5 };

const createNewCat = (x: TCatSeed) => {
  // doSomething
};
createNewCat(CatSeed)`}</CodeBlock>
      <p>
        Note that a cat should be a defined data-type that should correspond exactly to the
        database. As such the variable/type passed into <code>createNewCat()</code> is not a TCat -
        it is something else. You can be creative with the terminology if you don't like the term
        "seed", but just make sure you are creating these distinctions. It is usually best to make
        these decisions ahead of writing the code and build a consensus between all members of a
        team.
      </p>

      <h2>Helpful reading and tips</h2>
      <p>
        Creating lots of different, but similar, types can be time-consuming. You will probably want
        to use some of TypeScript's utility types such as <code>Pick</code> or <code>Omit</code>{" "}
        that are detailed in full in the{" "}
        <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html">
          TypeScript Docs
        </a>{" "}
        - if used properly, utility types will enable changes to the database to propagate through
        your type-system by making only a couple of changes.
      </p>
      <p>
        Additionally have a read of{" "}
        <Link href="/guides/inference-and-utility-types">Inference and Utility Types</Link> where we
        explain many of the holistic ways to think about inferring types.
      </p>
    </Typography>
  );
}

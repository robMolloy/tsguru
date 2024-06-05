import { CodeBlock, CodeEditor, Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Any vs Unknown</h1>

      <h2>Conclusion</h2>
      <p>
        Some articles are long others are short. This one is the latter. Always use{" "}
        <code>unknown</code> over <code>any</code>.
      </p>

      <p>
        There is really very few scenarios where you should use <code>any</code> in your project. In
        fact, we can't think of <code>any</code>.
      </p>

      <p>
        You can probably stop reading here, but if you want to know why this is the case then read
        on.
      </p>

      <h2>But why?</h2>
      <p>
        Every time you use <code>any</code>, you are turning off type checking for that variable
        (and sometimes degrading the type checking of the variables that come into contact with the
        <code>any</code>). This means that you are losing all the benefits of using TypeScript in
        the first place - all that hard work just thrown away.
      </p>

      <p>
        Some functions will return <code>any</code> such as <code>fetch()</code> and we would urge
        you to assert it as <code>unknown</code> immediately. This will force you to handle the type
        checking yourself and not make any assumptions about the data. Example below.
      </p>

      <CodeEditor height={25}>{`const fetchValue = async () => {
  const response = await fetch("https://someapi.com/somedatabutcouldbeanerror");
  const data = await response.json(); // this is inferred as any

  const value = data.hello.goodbye.howareyoutoday;
  // this is very unlikely to be the correct structure
  // but where is our error?
  
  return value;
};`}</CodeEditor>
      <p>If we use the same code but assert that it is unknown we will get the expected error.</p>

      <CodeEditor height={25}>{`const fetchValue2 = async () => {
  const response = await fetch("https://someapi.com/somedatabutcouldbeanerror");
  const data = (await response.json()) as unknown;

  const value = data.hello.goodbye.howareyoutoday;
  // TADAH!!! It now errors
  
  return value;
};`}</CodeEditor>

      <p>
        So to resolve this error we just need to add in some validation, this is easiest with a
        schema-validation like Zod.
      </p>

      <CodeBlock>{`// We haven't used the editor for this one as it's not possible to install dependencies here
// To see it working properly you can copy the code into your project and install zod with \`npm i zod\`

import {z} from "zod";
const schema = z.object({
  hello: z.object({
    goodbye: z.object({
      howareyoutoday: z.string()
    })
  }),
});

const fetchValue3 = async () => {
  const response = await fetch("https://someapi.com/somedatabutcouldbeanerror");
  const initData = (await response.json()) as unknown;

  const parseResponse = schema.safeParse(initData); 
  // this will return one of two objects 
  // { success: true, data: ... } valid data returned in data key
  // { success: false, error: ... } clear error returned in error key (although we will not use it in this example)

  if(parseResponse.success) return parseResponse.hello.goodbye.howareyoutoday;
  else return "defaultValue";
};`}</CodeBlock>

      <p>
        For more information about Zod, schema-validation and fetching data safely read through{" "}
        <Link href="/recommendations/run-time-checking">Run-time checking</Link> and{" "}
        <Link href="/guides/fetching-data-safely-react">Fetching Data Safely In React</Link>.
      </p>
    </Typography>
  );
}

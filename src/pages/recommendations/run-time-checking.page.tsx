import { CodeBlock, Typography } from "@/components";

export default function Page() {
  return (
    <Typography>
      <h1>Run-time checking</h1>
      <p>
        If there's one thing that TS Gurus are going to insist on it's run-time checking (in
        development, at least). Let's show you why;
      </p>
      <p>Standard practice for getting the response from an API might look something like this.</p>
      <CodeBlock>
        {`const fetchData = async () => {
  const response = await fetch("https://someanimalapi.com");
  const data = (await response.json()) as {
    type: string;
    data: {
      name: string;
      age: number;
      breed: {
        favouriteFood: number;
        speedKmh: number;
      };
    };
  };
};`}
      </CodeBlock>
      <p>But what happens if `breed` is sometimes an undefined, or age is a string?</p>
      <p>
        This is where the problems can start and usually you don't find out straight away. You'll be
        trying to create a new feature and there's a weird issue, but only some of time - you
        realise you start debbugging through various screens and eventually realise it's coming from
        a mismatch between your API call and the type you asserted.
      </p>
      <p>
        Wouldn't it be better if any time you were fetching data you could check it, and based on
        that check your type is inferred? That's where Zod comes in.
      </p>
      <CodeBlock>
        {`import { z } from "zod";

const schema = z.object({
  type: z.string(),
  data: z.object({
    name: z.string(),
    age: z.number(),
    breed: z.object({
      favouriteFood: z.number(),
      speedKmh: z.number(),
    }),
  }),
});

const fetchData = async () => {
  const response = await fetch("https://someanimalapi.com");
  const initData = await response.json();
  const data = schema.parse(initData);
  return data;
};`}
      </CodeBlock>
      <p>
        Now when your data isn't correct it will throw an error. Even better than that your error
        message will be really clear and you will be told exactly what is wrong with your data.
      </p>
      <p>
        These checks are pretty performant, but if you're worried about performance in production or
        you'd just like to have a bit more flexibility you can always do the following;
      </p>
      <CodeBlock>{`  const data = process.env.NODE_ENV === "development"
      ? schema.parse(initData)
      : (initData as z.infer<typeof schema>);
      return data;`}</CodeBlock>
      <p>
        Tadah!!! All the type safety and error checking in development, but without any of the
        performance cost in production.
      </p>
    </Typography>
  );
}

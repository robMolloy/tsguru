import { CodeBlock } from "@/components";

export default function Home() {
  return (
    <div className="prose max-w-xxxl">
      <h1>Our recommendations</h1>
      <h2>Frameworks</h2>
      <p>
        We can provide our services for any web framework, but it is important,
        especially in teams that are getting up to speed with typescript that
        there are as few barriers as possible to get a full understanding of
        TypeScript. With so many web frameworks available our clients often ask
        us to make a recommendation when starting a new project.
      </p>
      <p>
        At TS Gurus we recommend our clients use React. There are different pros
        and cons to all web framework, from developer experience to performance.
        However, many of the React alternatives have ways of abstracting you
        away from the TypeScript types, either due to compilation or rendering
        mecahnisms. React provides an excellent typing system that gives direct
        access to types.
      </p>
      <p>
        One way to show how React differs from other frameworks is that unlike
        Svelte, the dev server doesn't even need to be running for the type
        system to work correctly, as Svelte has a compilation step. We don't
        suggest that you start making code changes without a dev server running,
        but Svelte's compilation step can sometimes be unreliable causing "bugs"
        that would be fixed if the server was just restarted - how annoying!
      </p>
      <h2>Run-time checking</h2>
      <p>
        If there's one thing that TS Gurus are going to insist on it's run-time
        checking (in development, at least). Let's show you why;
      </p>
      <p>
        Standard practice for getting the response from an API might look
        something like this.
      </p>
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
      <p>
        But what happens if `breed` is sometimes an undefined, or age is a
        string?
      </p>
      <p>
        This is where the problems can start and usually you don't find out
        straight away. You'll be trying to create a new feature and there's a
        weird issue, but only some of time - you realise you start debbugging
        through various screens and eventually realise it's coming from a
        mismatch between your API call and the type you asserted.
      </p>
      <p>
        Wouldn't it be better if any time you were fetching data you could check
        it, and based on that check your type is inferred? That's where Zod
        comes in.
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
        Now when your data isn't correct it will throw an error. Even better
        than that your error message will be really clear and you will be told
        exactly what is wrong with your data.
      </p>
      <p>
        These checks are pretty performant, but if you're worried about
        performance in production or you'd just like to have a bit more
        flexibility you can always do the following;
      </p>
      <CodeBlock>{`  const data = process.env.NODE_ENV === "development"
      ? schema.parse(initData)
      : (initData as z.infer<typeof schema>);
      return data;`}</CodeBlock>
      <p>
        Tadah!!! All the type safety and error checking in development, but
        without any of the performance cost in production.
      </p>
      <h2>The TS compiler</h2>
      <p>
        The TS compiler is a bit like other linters but with one major benefit -
        it understands data. This means that it can check your data is correct
        and give you really nice errors if not. Most frameworks will have a
        decent TypeScript setup out of the box, and this will show you errors in
        234567890 234567890 234567890 234567890 234567890 234567890 234567890
        234567890 234567890 234567890 your file as you edit it.
      </p>
      <p>
        However, what about if you're making changes in one file and it causes
        an error in another - that's where the TS compiler comes in. By running
        `tsc --noEmit --watch` in your terminal from the root of your project,
        you can get real-time feedback on any errors in your codebase. This is
        especially useful when working with data stores, where small changes at
        this level can proliferate through the whole project.
      </p>
      <p>
        To use this command you will need to install typescript globally with
        `npm install -g typescript`, but an easier way to do this to add it as a
        script in your package.json file. Assuming typescript is already
        installed, just add "tsc:watch": "tsc --noEmit --watch" within scripts.
      </p>
      <CodeBlock>
        {`{
  "name": "newProject",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "tsc:watch": "tsc --noEmit --watch",
    ...
  },
  "devDependencies": {
    "typescript": "^5",
    ...
  }
  ...
}
`}
      </CodeBlock>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

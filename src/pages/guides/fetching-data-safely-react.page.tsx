import { CodeBlock, CodeEditor, Typography } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <Typography fullPage>
      <h1>Fetching Data Safely In React</h1>
      <h2>Pre-cursor</h2>
      <p>
        In order to get the most out of this article, along with a basic understanding of
        client-side React, it will be helpful to have a some understanding of the following;{" "}
        <Link href="/recommendations/run-time-checking">Run-time Checking</Link>,{" "}
        <Link href="/guides/any-vs-unknown">Any vs Unkown</Link> and{" "}
        <Link href="/articles/type-narrowing-and-predicates">Type Narrowing & Predicates</Link>.{" "}
        It's not required reading but if there's anything you don't understand in this article, the
        linked articles/guides are likely to help.
      </p>
      <h2>Intro</h2>
      <p>
        If all variables in a TypeScript app conformed precisely to their types this would remove a
        huge number of errors. The good news is, this is possible. The following examples are for
        fetching API data but can work with any unknown data-source such as perhaps, localStorage or
        user inputs.
      </p>
      <h2>The standard way</h2>
      <p>
        A common way of fetching data is to call the API from within the useEffect and assert the
        type as follows. In this example the data is fetched and the type is asserted within the{" "}
        <code>fetchTransactions</code> function, and then is rendered with a very simple flex
        layout.
      </p>
      <CodeBlock>{`import React, { useEffect, useState } from "react";

type TTransaction = {
  id: string;
  amount: number;
  datetime: number;
  location: string;
};
type TTransactions = TTransaction[];

const fetchTransactions = async () => {
  const response = await fetch("https://someapi.com/transactions");
  const data = (await response.json()) as TTransactions;
  return data;
};

export const TransactionsComponent = () => {
  const [transactions, setTransactions] = useState<TTransactions | undefined>();

  const fetchAndSetTransactions = async () => {
    const newTransactions = await fetchTransactions();
    setTransactions(newTransactions);
  };

  useEffect(() => {
    fetchAndSetTransactions();
  }, []);
  return (
    <div>
      {!transactions && <div>loading...</div>}

      {transactions &&
        transactions.map((x) => (
          <div key={x.id} style={{ display: "flex" }}>
            <span>{x.id}</span>
            <span>{x.datetime}</span>
            <span>{x.location}</span>
            <span>{x.amount}</span>
          </div>
        ))}
    </div>
  );
};`}</CodeBlock>
      <h2>Tidying up the standard way</h2>
      <p>
        We can place the state-functionality into a <code>useTransactions</code> hook in order to
        separate concerns, make testing easier and just generally make the code a bit cleaner.
      </p>
      <p>
        Additionally we can change the <code>useState</code> generic type from{" "}
        <code>TTransactions | undefined</code> to{" "}
        <code>Awaited&lt;ReturnType&lt;typeof fetchTransactions&gt;&gt; | undefined</code>, which
        just gets the type that is returned from the <code>fetchTransactions</code> function - as
        it's an async function we need to unwrap the relevant type from the promise with{" "}
        <code>Awaited</code>. Due to the type assertion in the <code>fetchTransactions</code>{" "}
        function there is no difference between this and <code>TTransactions</code>. However, it
        will make the code more "DRY" so if we make changes in the future it will infer correctly.
      </p>
      <p>
        It's important to note that despite the changes below, the functionality is the same as the
        previous example;
      </p>
      <CodeBlock>{`import React, { useEffect, useState } from "react";

type TTransaction = {
  id: string;
  amount: number;
  datetime: number;
  location: string;
};
type TTransactions = TTransaction[];

const fetchTransactions = async () => {
  const response = await fetch("https://someapi.com/transactions");
  const data = (await response.json()) as TTransactions;
  return data;
};

const useTransactions = () => {
  const [transactions, setTransactions] = useState<
    Awaited<ReturnType<typeof fetchTransactions>> | undefined
  >();

  const fetchAndSetTransactions = async () => {
    const newTransactions = await fetchTransactions();
    setTransactions(newTransactions);
  };

  useEffect(() => {
    fetchAndSetTransactions();
  }, []);

  return { transactions };
};
export const TransactionsComponent = () => {
  const { transactions } = useTransactions();

  return (
    <div>
      {transactions &&
        transactions.map((x) => (
          <div key={x.id} style={{ display: "flex" }}>
            <span>{x.id}</span>
            <span>{x.datetime}</span>
            <span>{x.location}</span>
            <span>{x.amount}</span>
          </div>
        ))}
    </div>
  );
};
`}</CodeBlock>
      <h2>Parsing the data</h2>
      <p>
        In the next example we are using schema-validation which provides run-time checks to ensure
        that the types are consistent with the values. We first declare the{" "}
        <code>transactionSchema</code> & <code>transactionsSchema</code> which we will use to parse
        the data after. Notice that the <code>useTransactions</code> hook stays the same, but
        instead of using it in the component we now call <code>useSafeTransactions</code> in the
        component which calls the <code>useTransactions</code> and parses the resulting values.
      </p>
      <p>
        Parsing the data gives us the ability to render an error state in the UI. Remember to read
        the linked articles at the top of this if you want to learn more about parsing the data.
      </p>
      <CodeBlock>{`import React, { useEffect, useState } from "react";
import { z } from "zod";

const transactionSchema = z.object({
  id: z.string(),
  amount: z.number(),
  datetime: z.number(),
  location: z.string(),
});

const transactionsSchema = z.array(transactionSchema);

const fetchTransactions = async () => {
  const response = await fetch("https://someapi.com/transactions");
  const data = (await response.json()) as unknown;
  return data;
};

const useTransactions = () => {
  const [transactions, setTransactions] = useState<
    Awaited<ReturnType<typeof fetchTransactions>> | undefined
  >();

  const fetchAndSetTransactions = async () => {
    const newTransactions = await fetchTransactions();
    setTransactions(newTransactions);
  };

  useEffect(() => {
    fetchAndSetTransactions();
  }, []);

  return { transactions };
};

const useSafeTransactions = () => {
  const { transactions } = useTransactions();

  const safeTransactions =
    transactions === undefined ? undefined : transactionsSchema.safeParse(transactions);

  return { safeTransactions };
};
export const TransactionsComponent = () => {
  const { safeTransactions } = useSafeTransactions();

  return (
    <div>
      {!safeTransactions && <div>loading...</div>}

      {safeTransactions && !safeTransactions.success && <div>error</div>}

      {safeTransactions &&
        safeTransactions.success &&
        safeTransactions.data.map((x) => (
          <div key={x.id} style={{ display: "flex" }}>
            <span>{x.id}</span>
            <span>{x.datetime}</span>
            <span>{x.location}</span>
            <span>{x.amount}</span>
          </div>
        ))}
    </div>
  );
};`}</CodeBlock>

      <h2>Readable UI states</h2>
      <p>
        We have now made the code less likely to error, but we can make some slight changes to make
        the data states slightly more readable by using a <code>status</code> property why can be{" "}
        <code>"loading" | "success" | "error"</code>.
      </p>

      <p>
        If you are not familiar with the <code>{`(()=>{...})()`}</code> syntax, we are simply
        declaring a function and immediately calling it. We could just as easily move the function
        elsewhere or use the ternary operator, but some people find this more readable.
      </p>
      <CodeBlock>{`import React, { useEffect, useState } from "react";
import { z } from "zod";

const transactionSchema = z.object({
  id: z.string(),
  amount: z.number(),
  datetime: z.number(),
  location: z.string(),
});

const transactionsSchema = z.array(transactionSchema);

const fetchTransactions = async () => {
  const response = await fetch("https://someapi.com/transactions");
  const data = (await response.json()) as unknown;
  return data;
};

const useTransactions = () => {
  const [transactions, setTransactions] = useState<
    Awaited<ReturnType<typeof fetchTransactions>> | undefined
  >();

  const fetchAndSetTransactions = async () => {
    const newTransactions = await fetchTransactions();
    setTransactions(newTransactions);
  };

  useEffect(() => {
    fetchAndSetTransactions();
  }, []);

  return { transactions };
};

const useSafeTransactions = () => {
  const { transactions } = useTransactions();

  const safeTransactions = (() => {
    if (!transactions) return { status: "loading" } as const;
    const parseResponse = transactionsSchema.safeParse(transactions);

    if (parseResponse.success) return { status: "success", data: parseResponse.data } as const;
    return { status: "error", error: parseResponse.error } as const;
  })();

  return { safeTransactions };
};
export const TransactionsComponent = () => {
  const { safeTransactions } = useSafeTransactions();

  return (
    <div>
      {safeTransactions.status === "loading" && <div>loading...</div>}
      {safeTransactions.status === "error" && (
        <div>ERROR: {JSON.stringify(safeTransactions.error)}</div>
      )}
      {safeTransactions.status === "success" &&
        safeTransactions.data.map((x) => (
          <div key={x.id} style={{ display: "flex" }}>
            <span>{x.id}</span>
            <span>{x.datetime}</span>
            <span>{x.location}</span>
            <span>{x.amount}</span>
          </div>
        ))}
    </div>
  );
};`}</CodeBlock>
      <p>
        We have now incredibly readable UI code that allows developers to write code quickly and in
        a readable manner.
      </p>

      <h2>Summary</h2>
      <p>
        There are a number small changes that could be made to make this code better, or more
        suitable for your use case or your coding-style. But if following this style they will all
        have the following steps
      </p>
      <ul>
        <li>Create a custom hook that on render fetches data</li>
        <li>Fetch data onMount</li>
        <li>Parse that data through a schema validator such as zod</li>
        <li>Manipulate the return such that there is a status key for each return</li>
        <li>Build a UI from the data returned in the hook</li>
      </ul>

      <p>
        There we have it, a safe way to fetch data in React that could be easily transferred to
        another framework. You may also want to consider fetching the data when the app mounts and
        store the data in a store such as Zustand in order to decrease the number of data-fetches,
        but this is and excellent starting point.
      </p>
    </Typography>
  );
}

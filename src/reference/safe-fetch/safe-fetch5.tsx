import React, { useEffect, useState } from "react";
import { z } from "zod";

const transactionSchema = z.object({
  id: z.string(),
  amount: z.number(),
  datetime: z.number(),
  location: z.string(),
});

const transactionsSchema = z.array(transactionSchema);

const getSafeTransaction = (x: unknown) => {
  if (!x) return { status: "loading" } as const;
  const parseResponse = transactionsSchema.safeParse(x);

  if (parseResponse.success) return { status: "success", data: parseResponse.data } as const;
  return { status: "error", error: parseResponse.error } as const;
};

const fetchTransactions = async () => {
  const response = await fetch("https://someapi.com/transactions");
  const data = await response.json();

  const safeTransactions = getSafeTransaction(data);

  return safeTransactions;
};

const useTransactions = () => {
  const [transactions, setTransactions] = useState<Awaited<ReturnType<typeof fetchTransactions>>>({
    status: "loading",
  });

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
      {transactions.status === "loading" && <div>loading...</div>}
      {transactions.status === "error" && <div>ERROR: {JSON.stringify(transactions.error)}</div>}
      {transactions.status === "success" &&
        transactions.data.map((x) => (
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

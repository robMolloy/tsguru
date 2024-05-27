import React, { useEffect, useState } from "react";
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
};

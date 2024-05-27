import React, { useEffect, useState } from "react";

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

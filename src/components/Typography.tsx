import React from "react";

export const Typography = (p: { children: React.ReactNode; fullPage?: boolean }) => {
  return <div className="prose max-w-xxxl mx-auto my-4">{p.children}</div>;
};

import React from "react";

export type TTypographyProps = {
  children: React.ReactNode;
};

export const Typography = (p: TTypographyProps) => {
  return <div className="prose max-w-xxxl mx-auto">{p.children}</div>;
};

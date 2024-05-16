import React from "react";

export type TTypographyProps = {
  children: React.ReactNode;
};

export const Typography = (p: TTypographyProps) => {
  return <div className="prose max-w-xxxl m-auto ">{p.children}</div>;
};

import React from "react";

export const Typography = (p: {
  children: React.ReactNode;
  fullPage?: boolean;
  wide?: boolean;
}) => {
  const wide = p.wide ?? false;
  return (
    <div className={`prose ${wide ? "" : "max-w-xxxl mx-auto"} ${p.fullPage ? "my-4" : ""}`}>
      {p.children}
    </div>
  );
};

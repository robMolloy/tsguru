import React from "react";

export const Footer = (p: { children: React.ReactNode }) => {
  return (
    <footer className="footer border-t bg-neutral pb-16 pt-12 text-neutral-content">
      <div className="block w-full">{p.children}</div>
    </footer>
  );
};

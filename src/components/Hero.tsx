import React from "react";

export type THeroProps = {
  children: React.ReactNode;
  className?: HTMLDivElement["className"];
};

export const Hero = (p: THeroProps) => {
  return (
    <div className={`hero ${p.className}`}>
      <div className="hero-content text-center">
        <div className="max-w-md">{p.children}</div>
      </div>
    </div>
  );
};

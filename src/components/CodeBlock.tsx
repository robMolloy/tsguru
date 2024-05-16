import React, { useEffect, useRef, useState } from "react";
// import { useEffect } from "react";
import hljs from "highlight.js";

export type TCodeBlockProps = {
  children: string;
  language?: "typescript";
};

function escapeHtml(html: string) {
  var text = document.createTextNode(html);
  var div = document.createElement("div");
  div.appendChild(text);
  return div.innerHTML;
}

export const CodeBlock = ({ children, language = "typescript" }: TCodeBlockProps) => {
  const htmlCodeElmRef = useRef<HTMLElement>(null);

  const [escapedHtml, setEscapedHtml] = useState("");

  useEffect(() => setEscapedHtml(children), [children]);
  useEffect(() => {
    if (htmlCodeElmRef.current) {
      htmlCodeElmRef.current.setAttribute("data-highlighted", "");
      hljs.highlightElement(htmlCodeElmRef.current);
    }
  }, [escapedHtml]);
  return (
    <>
      <pre className="p-0 border-2 relative">
        <span className="absolute top-0 right-0">
          <button className="btn btn-ghost" onClick={() => navigator.clipboard.writeText(children)}>
            copy
          </button>
        </span>
        <code ref={htmlCodeElmRef} className={`language-${language}`}>
          {escapedHtml}
        </code>
      </pre>
    </>
  );
};

import { Editor, OnMount } from "@monaco-editor/react";
import { useEffect, useState } from "react";

type TEditor = Parameters<OnMount>[0];
type TProps = ({ value: string } | { children: string }) & { height: number };

export function CodeEditor(p: TProps) {
  const [editor, setEditor] = useState<TEditor | undefined>();
  const value = "value" in p ? p.value : p.children;

  useEffect(() => {
    if (editor) editor?.setValue(value);
  }, [value]);

  return (
    <Editor
      height={`${p.height}vh`}
      defaultLanguage="typescript"
      defaultValue={value}
      onMount={(initEditor) => {
        initEditor.getModel()?.updateOptions({});
        setEditor(initEditor);
      }}
    />
  );
}

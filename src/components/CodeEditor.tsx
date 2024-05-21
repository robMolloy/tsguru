import { Editor, OnMount } from "@monaco-editor/react";
import { useEffect, useState } from "react";

type TEditor = Parameters<OnMount>[0];

export function CodeEditor(p: { height: number; value: string }) {
  const [editor, setEditor] = useState<TEditor | undefined>();

  useEffect(() => {
    if (editor) editor?.setValue(p.value);
  }, [p.value]);

  return (
    <Editor
      height={`${p.height}vh`}
      defaultLanguage="typescript"
      defaultValue={p.value}
      onMount={(initEditor) => {
        initEditor.getModel()?.updateOptions({});
        setEditor(initEditor);
      }}
    />
  );
}

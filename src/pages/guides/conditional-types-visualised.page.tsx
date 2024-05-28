import { ConditionalTypesTreeVisualisation, Typography } from "@/components";
import Link from "next/link";

const primitivesVisualisationTreeData = [
  { xMin: 0, xMax: 12, y: 1, label: "any" },

  { xMin: 0, xMax: 4, y: 2, label: "number" },
  { xMin: 4, xMax: 8, y: 2, label: "string" },
  { xMin: 8, xMax: 12, y: 2, label: "boolean" },

  { xMin: 0, xMax: 2, y: 3, label: "10" },
  { xMin: 2, xMax: 4, y: 3, label: "3 | 8" },
  { xMin: 4, xMax: 6, y: 3, label: `"bonjour"` },
  { xMin: 6, xMax: 8, y: 3, label: `"hi" | "bye"` },
  { xMin: 8, xMax: 10, y: 3, label: "true" },
  { xMin: 10, xMax: 12, y: 3, label: "false" },

  { xMin: 0, xMax: 12, y: 4, label: "never" },
];

const arrayAndObjectsVisualisationTreeData = [
  { xMin: 0, xMax: 12, y: 1, label: "any" },

  { xMin: 0, xMax: 6, y: 2, label: "unknown[]" },
  { xMin: 6, xMax: 12, y: 2, label: "{ [key: string]: unknown }" },

  { xMin: 0, xMax: 3, y: 3, label: "string[]" },
  { xMin: 3, xMax: 6, y: 3, label: "number[]" },
  { xMin: 6, xMax: 9, y: 3, label: "{ [key: string]: string }" },
  { xMin: 9, xMax: 12, y: 3, label: "{ [key: string]: number }" },

  { xMin: 0, xMax: 3, y: 4, label: `("hi" | "bye")[]` },
  { xMin: 3, xMax: 6, y: 4, label: "(7 | 4)[]" },
  { xMin: 6, xMax: 9, y: 4, label: `{ [key: string]: "hi" | "bye" }` },
  { xMin: 9, xMax: 12, y: 4, label: "{ [key: string]: 7 | 4 }" },

  { xMin: 0, xMax: 12, y: 5, label: "never" },
];
export default function Page() {
  return (
    <Typography fullPage>
      <h1>Conditional Types Visualised</h1>

      <h2>Intro</h2>

      <p>
        The following visualised tables give an interactive way of exploring conditional types.
        Click on each item and the highlighted items below "extends" (or is a subset of) the top
        item.
      </p>

      <p>
        For an alternative explanation read through{" "}
        <Link href="conditional-types-explained">Conditional Types Explained</Link> or read through
        the TypeScript docs{" "}
        <a href="https://www.typescriptlang.org/docs/handbook/2/conditional-types.html">here</a>.
      </p>

      <h2>Primitives</h2>

      <ConditionalTypesTreeVisualisation
        treeData={primitivesVisualisationTreeData}
        typeSuffix="Primitive"
      />
      <h2>Objects</h2>
      <ConditionalTypesTreeVisualisation
        treeData={arrayAndObjectsVisualisationTreeData}
        typeSuffix="Object"
      />
    </Typography>
  );
}

import { GenericsTreeVisualisation } from "@/components";

const primitivesVisualisationTreeData = [
  { xMin: 0, xMax: 12, y: 1, label: "any" },

  { xMin: 0, xMax: 4, y: 2, label: "number" },
  { xMin: 4, xMax: 8, y: 2, label: "string" },
  { xMin: 8, xMax: 12, y: 2, label: "boolean" },

  { xMin: 0, xMax: 2, y: 3, label: "10" },
  { xMin: 2, xMax: 4, y: 3, label: "3 | 8 | 5" },
  { xMin: 4, xMax: 6, y: 3, label: `"bonjour"` },
  { xMin: 6, xMax: 8, y: 3, label: `"hi" | "bye" | "cry"` },
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
    <div>
      <div>
        <GenericsTreeVisualisation
          treeData={primitivesVisualisationTreeData}
          typeSuffix="Primitive"
        />
        ;
      </div>
      <div>
        <GenericsTreeVisualisation
          treeData={arrayAndObjectsVisualisationTreeData}
          typeSuffix="Object"
        />
      </div>
    </div>
  );
}
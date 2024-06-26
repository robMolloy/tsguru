import React, { useState } from "react";
import { CodeEditor, Toggle, Typography } from ".";

export type TGenericsTreeVisualisationProps = {
  treeData: { xMin: number; xMax: number; y: number; label: string }[];
  typeSuffix: string;
};

export const ConditionalTypesTreeVisualisation = (p: TGenericsTreeVisualisationProps) => {
  const [xMinValue, setXMinValue] = useState<number>(0);
  const [xMaxValue, setXMaxValue] = useState<number>(60);
  const [yValue, setYValue] = useState<number>(0);

  const handleClick = (xMin: number, xMax: number, y: number) => {
    setXMinValue(xMin);
    setXMaxValue(xMax);
    setYValue(y);
  };
  const isHighlighted = (xMin: number, xMax: number, y: number) => {
    return yValue <= y && xMinValue < xMax && xMaxValue > xMin;
  };
  const getHighlightedClass = (xMin: number, xMax: number, y: number) => {
    return isHighlighted(xMin, xMax, y) ? "border-white" : "border-base-300";
  };

  const highlighted = p.treeData.filter((item) => isHighlighted(item.xMin, item.xMax, item.y));
  const unhighlighted = p.treeData.filter((item) => !isHighlighted(item.xMin, item.xMax, item.y));
  const selected = highlighted[0] as NonNullable<(typeof highlighted)[number]>;

  const [showIsASubsetOf, setShowIsASubsetOf] = useState(false);

  return (
    <div>
      <div className={`grid grid-cols-12 gap-1 text-center`}>
        {p.treeData.map((item) => (
          <div
            key={`${item.xMin}-${item.xMax}-${item.y}-tree`}
            onClick={() => handleClick(item.xMin, item.xMax, item.y)}
            style={{ gridColumn: `span ${item.xMax - item.xMin} / span ${item.xMax - item.xMin}` }}
            className={`border col-span-${item.xMax - item.xMin} ${getHighlightedClass(
              item.xMin,
              item.xMax,
              item.y
            )}`}
          >
            <pre className=" overflow-ellipsis text-xs py-2 px-0 m-0" style={{ borderRadius: "0" }}>
              {item.label}
            </pre>
          </div>
        ))}
      </div>
      <br />
      <div className="join join-vertical w-full">
        <div tabIndex={0} className="collapse collapse-arrow join-item border">
          <div className="collapse-title text-xl font-medium">
            Click to show which types extend {selected.label}
          </div>
          <div className="collapse-content">
            <div>
              <Toggle
                value={showIsASubsetOf}
                onChange={(x) => setShowIsASubsetOf(x)}
                label="Show Is a subset of"
              />
              <CodeEditor
                height={40}
                value={highlighted
                  .map(
                    (item, j) =>
                      `type T${j}${p.typeSuffix} = ${item.label} extends${
                        showIsASubsetOf ? " /* is a subset of */" : ""
                      } ${selected.label}  ? true : false // true`
                  )
                  .join("\n\n")}
              />
            </div>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow join-item border">
          <div className="collapse-title text-xl font-medium">
            Click to show which types do not extend {selected.label}
          </div>
          <div className="collapse-content">
            <div>
              <Toggle
                value={showIsASubsetOf}
                onChange={(x) => setShowIsASubsetOf(x)}
                label="Show Is a subset of"
              />
              <CodeEditor
                height={40}
                value={unhighlighted
                  .map(
                    (item, j) =>
                      `type T${j}${p.typeSuffix}x = ${item.label} extends${
                        showIsASubsetOf ? " /* is a subset of */" : ""
                      } ${selected.label} ? true : false // false`
                  )
                  .join("\n\n")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

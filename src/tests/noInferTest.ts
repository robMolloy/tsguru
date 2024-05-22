import { create } from "zustand";

type NoInfer<T> = T & { [K in keyof T]: T[K] };

function createStreetLight<C extends string>(colors: C[], defaultColor?: NoInfer<C>) {
  // ...
}

// @ts-expect-error
createStreetLight(["red", "yellow", "green"], "blue");
createStreetLight(["red", "yellow", "green"], "red");

function someFn(x: { allPossibleValues: string[]; value: string }) {
  // ...
}
someFn({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour" });

function someFn1<T extends { allPossibleValues: string[]; value: string }>(x: T) {
  // ...
}
const allPossibleValues1 = ["hi", "bye", "cry"] as ("hi" | "bye" | "cry")[];
type TParam1 = {
  allPossibleValues: typeof allPossibleValues1;
  value: NonNullable<(typeof allPossibleValues1)[number]>;
};
// @ts-expect-error
someFn1<TParam1>({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour" });

function someFn2<T1 extends string, T2 extends T1>(x: { allPossibleValues: T1[]; value: T2 }) {
  // ...
}
// @ts-expect-error
someFn2({ allPossibleValues: ["hi", "bye", "cry"], value: "bonjour" });

// const streetLightColors = ["red", "yellow", "green"] as const;
// type TStreetLightColors = typeof streetLightColors;
// type TStreetLightColor = TStreetLightColors[number];
// type TState = {
//   streetLightColors: TStreetLightColors;
//   streetLightColor: TStreetLightColor;
//   setStreetLightColor: (x: TStreetLightColor) => void;
// };

// export const useStreetLightBase = create<TState>()((set, get) => ({
//   streetLightColors,
//   streetLightColor: "green",
//   setStreetLightColor: (streetLightColor) => {
//     set({ streetLightColor });
//   },
// }));

// const test = create();
// type x = typeof test;
// type x2 = Parameters<x>[0];
// type x3 = Parameters<x2>[0];
// type x4 = Parameters<x2>[1];

// const createSimpleStore = <C extends string>(
//   x: (
//     set: x3,
//     get: x4
//   ) => {
//     possibleData: C[];
//     data: NoInfer<C>;
//     setData: (x: NoInfer<C>) => void;
//   }
// ) => create()(x);

// const useSimpleStore = createSimpleStore((set) => ({
//   possibleData: ["red", "yellow", "green"],
//   data: "green",
//   setData: (data) => {
//     set({ data });
//   },
// }));

// export const useStreetLight = create<TState>()((set, get) => ({
//   streetLightColors,
//   streetLightColor: "green",
//   setStreetLightColor: (streetLightColor) => {
//     set({ streetLightColor });
//   },
// }));

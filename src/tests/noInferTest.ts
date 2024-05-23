type NoInfer<T> = T & { [K in keyof T]: T[K] };

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

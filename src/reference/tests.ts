/* numbers */
type T1 = number extends string ? true : false;
//   ^?
//                false

type T2 = number extends unknown[] ? true : false;
//   ^?
//                false

type T3 = number extends { [key: string]: unknown } ? true : false;
//   ^?
//                false

type T4 = number extends 1 | 2 | 3 ? true : false;
//   ^?
//                false

type T5 = 1 | 2 | 3 extends number ? true : false;
//   ^?
//                true

type T6 = 1 | 2 | 3 | "hi" extends number ? true : false;
//   ^?
//                false

type T7 = 1 | 2 | 3 extends any ? true : false;
//   ^?
//                true

type T8 = 1 | 2 | 3 extends never ? true : false;
//   ^?
//                false

type T9 = 1 | 2 | 3 extends 1 | 2 | 3 | 4 ? true : false;
//   ^?
//                true

type T10 = 1 | 2 | 3 | 4 extends 1 | 2 | 3 ? true : false;
//   ^?
//                false

/* strings */
type T11 = string extends number ? true : false;
//   ^?
//                false

type T12 = string extends unknown[] ? true : false;
//   ^?
//                false

type T13 = string extends { [key: string]: unknown } ? true : false;
//   ^?
//                false

type T14 = string extends 1 | 2 | 3 ? true : false;
//   ^?
//                false

type T15 = "hi" | "bye" | "cry" extends string ? true : false;
//   ^?
//                true

type T16 = "hi" | "bye" | "cry" | 1 extends string ? true : false;
//   ^?
//                false

type T17 = "hi" | "bye" | "cry" extends any ? true : false;
//   ^?
//                true

type T18 = "hi" | "bye" | "cry" extends never ? true : false;
//   ^?
//                false

type T19 = "hi" | "bye" | "cry" extends "hi" | "bye" | "cry" | "dye" ? true : false;
//   ^?
//                true

type T20 = "hi" | "bye" | "cry" | "dye" extends "hi" | "bye" | "cry" ? true : false;
//   ^?
//                false

/* never */
type T21 = never extends number ? true : false;
//   ^?
//                true

type T22 = never extends string ? true : false;
//   ^?
//                true

type T23 = never extends unknown[] ? true : false;
//   ^?
//                true

type T24 = never extends never ? true : false;
//   ^?
//                true

type T25 = never extends any ? true : false;
//   ^?
//                true

type T26 = number extends never ? true : false;
//   ^?
//                false

type T27 = string extends never ? true : false;
//   ^?
//                false

type T28 = unknown[] extends never ? true : false;
//   ^?
//                false

type T29 = never extends never ? true : false;
//   ^?
//                true

type T30 = any extends never ? true : false;
//   ^?
//                true | false

/* any */
type T31 = any extends number ? true : false;
//   ^?
//                true | false

type T32 = any extends string ? true : false;
//   ^?
//                true | false

type T33 = any extends unknown[] ? true : false;
//   ^?
//                true | false

type T34 = any extends never ? true : false;
//   ^?
//                true

type T35 = any extends any ? true : false;
//   ^?
//                true

type T36 = number extends any ? true : false;
//   ^?
//                true

type T37 = string extends any ? true : false;
//   ^?
//                true

type T38 = unknown[] extends any ? true : false;
//   ^?
//                true

type T39 = never extends any ? true : false;
//   ^?
//                true

type T40 = any extends any ? true : false;
//   ^?
//                true

/* arrays */
type T41 = ["hi", "bye"] extends [string] ? true : false;
//   ^?
//                false

type T42 = ["hi", "bye"] extends [string, string] ? true : false;
//   ^?
//                true

type T43 = ["hi", "bye"] extends [string, string, string] ? true : false;
//   ^?
//                false

type T44 = ["hi", "bye"] extends string[] ? true : false;
//   ^?
//                true

type T45 = ["hi", "bye"] extends (string | number)[] ? true : false;
//   ^?
//                true

type T46 = [string] extends ["hi", "bye"] ? true : false;
//   ^?
//                false

type T47 = [string, string] extends ["hi", "bye"] ? true : false;
//   ^?
//                false

type T48 = [string, string, string] extends ["hi", "bye"] ? true : false;
//   ^?
//                false

type T49 = string[] extends ["hi", "bye"] ? true : false;
//   ^?
//                false

type T50 = (string | number)[] extends ["hi", "bye"] ? true : false;
//   ^?
//                false

/* objects */
type T51 = { a: "hi"; b: "bye" } extends { a: "hi" } ? true : false;
//   ^?
//                true

type T52 = { a: "hi"; b: "bye" } extends { a: "hi"; b: "bye"; c: "cry" } ? true : false;
//   ^?
//                false

type T53 = { a: "hi"; b: "bye" } extends { a: string; b: string } ? true : false;
//   ^?
//                true

type T54 = { a: "hi"; b: "bye" } extends { [key: string]: string } ? true : false;
//   ^?
//                true

type T55 = { a: "hi"; b: "bye" } extends { [key: string]: string | number } ? true : false;
//   ^?
//                true

type T56 = { a: "hi" } extends { a: "hi"; b: "bye" } ? true : false;
//   ^?
//                false

type T57 = { a: "hi"; b: "bye"; c: "cry" } extends { a: "hi"; b: "bye" } ? true : false;
//   ^?
//                false

type T58 = { a: string; b: string } extends { a: "hi"; b: "bye" } ? true : false;
//   ^?
//                false

type T59 = { [key: string]: string } extends { a: "hi"; b: "bye" } ? true : false;
//   ^?
//                false

type T60 = { [key: string]: string | number } extends { a: "hi"; b: "bye" } ? true : false;
//   ^?
//                false

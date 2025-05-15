// type Casting or Assertion

type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"hello"; // less specific
let e = <string | number>"hello"; // less specific

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string; // type assertion

// Be careful! TS will not throw an error - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string;
// double assertion or double casting or forced casting
10 as unknown as string;
// this is not recommended because it overrides the type system
// use type guards instead

// the DOM
const img = document.querySelector("img")!; // ! non-null assertion operator
// the ! operator tells TS that the element will not be null
// but this is not safe, because if the element is not found, it will throw an error
// so we can use the optional chaining operator ? to check if the element is found

const myImg = document.getElementById("#img") as HTMLImageElement;
// error: Property 'src' does not exist on type 'Element | null'.

const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src; // error: Property 'src' does not exist on type 'Element | null'.

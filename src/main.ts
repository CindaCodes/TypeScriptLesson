// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserID = stringOrNumber;

//Literal Types

let myName: "Dave";
let userName: "Dave" | "John" | "Jane";

userName = "Jane"; // valid

//functions
const add = (a: number, b: number): Number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

//interface mathFunction {
//  (a: number, b: number): number;};

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));

//rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr, 0);
};

logMsg(total(10, 2, 3));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) {
      // without this condition, it will run infinitely
      break;
    }
  }
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "String";
  if (typeof value === "number") return "Number";
  return createError("This should never happen");
};

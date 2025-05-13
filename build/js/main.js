"use strict";
//Literal Types
let myName;
let userName;
userName = "Jane"; // valid
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
//interface mathFunction {
//  (a: number, b: number): number;};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
//rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr, 0);
};
logMsg(total(10, 2, 3));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100) {
            // without this condition, it will run infinitely
            break;
        }
    }
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "String";
    if (typeof value === "number")
        return "Number";
    return createError("This should never happen");
};

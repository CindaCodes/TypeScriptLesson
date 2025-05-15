"use strict";
// type Casting or Assertion
//convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "hello"; // less specific
let e = "hello"; // less specific
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat"); // type assertion
// Be careful! TS will not throw an error - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string;
// double assertion or double casting or forced casting
10;
// this is not recommended because it overrides the type system
// use type guards instead
// the DOM
const img = document.querySelector("img"); // ! non-null assertion operator
// the ! operator tells TS that the element will not be null
// but this is not safe, because if the element is not found, it will throw an error
// so we can use the optional chaining operator ? to check if the element is found
const myImg = document.getElementById("#img");
// error: Property 'src' does not exist on type 'Element | null'.
const nextImg = document.getElementById("#img");
img.src;
myImg.src; // error: Property 'src' does not exist on type 'Element | null'.

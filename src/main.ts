let stringArr = ["one", "hey", "Dave"];
let guitars = ["Yamaha", "Gibson", 5150];

let mixedData = ["hello", 1, true];

stringArr[0] = "John";
stringArr.push("Doe");

guitars[0] = 1984;
guitars.unshift("Fender");

guitars = stringArr; // This will throw an error because the types are incompatible
mixedData = stringArr; // This is allowed because mixedData can hold any type
let test = [];
let bands: string[] = [];
bands.push("Metallica");

// Tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];
mixed = myTuple; // This is allowed because mixed can hold any type

myTuple[1] = 42; // This is allowed because myTuple is a tuple

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj); // object

const exampleObj = {
  prop1: "Dave",
  prop2: true,
  prop3: 42,
};
exampleObj.prop1 = "John"; // This is allowed because prop1 is a string
exampleObj.prop2 = false; // This is allowed because prop2 is a boolean
exampleObj.prop3 = 100; // This is allowed because prop3 is a number

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}
let evh: Guitarist = {
  name: "Eddie Van Halen",
  active: false,
  albums: [1984, "5150", "OU812"],
};
let jp: Guitarist = {
  active: true,
  albums: ["IV", "Houses of the Holy"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello!";
};
console.log(greetGuitarist(evh)); // Hello Eddie Van Halen!
// Hello Jimmy Page!
console.log(greetGuitarist(jp)); // Hello Jimmy Page!

// Enums
enum Grade {
  U = 1,
  A,
  B,
  C,
  D,
  E,
}

console.log(Grade.A); // A

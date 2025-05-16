"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript" // default value makes it optional
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age); // Call the parent constructor to super
        this.computer = computer;
        this.computer = computer;
    }
    // This makes Lang public and only accessible through this class
    // If I was to console.log (Sara.lang) it would be undefined
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new Guitarist("Jimmy", "guitar");
console.log(page.play("strums"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; //++ makes sure increments to 1
    }
}
Peeps.count = 0; // Static property
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(John.id); // 1
console.log(Steve.id); // 2
console.log(Amy.id); // 3
console.log(Peeps.count);
////////////////////////////////////////
// Gitter and Setter
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Parameter is not an array of strings");
    }
}
const MyBand = new Bands();
MyBand.data = ["Metallica", "Guns N Roses", "Nirvana"];
console.log(MyBand.data);
MyBand.data = [...MyBand.data, "Queen"];
console.log(MyBand.data);
//MyBand.data = ['Van Halen', 5150] // Error: Parameter (5150) is not an array of strings

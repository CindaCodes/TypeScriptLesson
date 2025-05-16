class Coder {
  // Need property in class and in constructor unless you add (public, private, protected..) in constructor
  // name: string;
  // music: string;
  // age: number;
  // lang: string;

  secondaryLang!: string; //! means it will be initialized later

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript" // default value makes it optional
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I am ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age); // Call the parent constructor to super
    this.computer = computer;
  }

  // This makes Lang public and only accessible through this class
  // If I was to console.log (Sara.lang) it would be undefined
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
// console.log(Sara.lang); // undefined
// console.log(Sara.age); // undefined
//////////////////////////////////////////

// Interfaces
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const page = new Guitarist("Jimmy", "guitar");
console.log(page.play("strums"));

class Peeps {
  static count: number = 0; // Static property
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count; //++ makes sure increments to 1
  }
}

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
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Parameter is not an array of strings");
  }
}

const MyBand = new Bands();
MyBand.data = ["Metallica", "Guns N Roses", "Nirvana"];
console.log(MyBand.data);
MyBand.data = [...MyBand.data, "Queen"];
console.log(MyBand.data);
//MyBand.data = ['Van Halen', 5150] // Error: Parameter (5150) is not an array of strings

// tipe data dasar pada typescipt
// string
const fullName: string = "Riki Ridwan";
const address = "Jakarta";
// number
const age: number = 20;
// boolean
const isMarried: boolean = false;
// tipe data array
const hobbies: string[] = ["coding", "reading", "gaming"];
const numbers: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true];
const mixed: (string | number | boolean)[] = ["Riki", 20, true];
const array: Array<string> = ["Riki", "Ridwan"];
// tipe data any
const any: any = "Riki";
// null dan undefined
const nullValue: null = null;
const undefinedValue: undefined = undefined;
// tipe data object
const person: { name: string; age: number, isMarried: boolean } = {
  name: "Riki",
  age: 21,
  isMarried: false,
}

interface Person2 {
   name: string;
   age: number;
   isMarried: boolean;
   greet(): string,
}

const person2: Person2 = {
   name: "Riki",
   age: 21,
   isMarried: false,
   greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
   }
}

// tipe data tuple
// tuple
const tuple: [string, number, boolean] = ["Riki", 20, true];
// enum

enum Direction {
   Up, // 0
   Down, // 1
   Left, // 2
   Right, // 3
}

enum Status {
   Active = "active",
   Inactive = "inactive",
}

if (Status.Active === "active") {
   console.log("Status is active");
} else {
   console.log("Status is inactive");
}

// function
function greet(name: string): string {
   return `Hello, ${name}!`;
}

function greet3(name: string): void {
   console.log(`Hello, ${name}!`);
}

const greet2 = (name: string): string => `Hello, ${name}!`;

function opsional(name: string, age?: number): string {
   if (age) {
      return `Hello, ${name}! You are ${age} years old.`;
   }
   return `Hello, ${name}!`;
}

// Type Alias
type Point = {
   x: number;
   y: number;
}

const point: Point = {
   x: 10,
   y: 20,
}

let id: string | number;
id = "string";
id = 1;

// intersection type
// menggabungkan tipe data
type Admin = {
   adminId: number;
}

type User = {
   name: string;
}

type adminUser = Admin & User;

const adminUser: adminUser = {
   adminId: 1,
   name: "Riki",
}

// class pada typescript
class Animal {
   name: string;

   constructor(name: string) {
      this.name = name;
   }

   makeSound(): void {
      console.log(`${this.name} makes a sound`);
   }
}

const dog = new Animal("Dog");
dog.makeSound();

// inheritance
class Cat extends Animal {
   constructor(name: string) {
      super(name);
   }
}

// Access Modifiers
// public, private, protected
class Person {
   public name: string;
   
   constructor(name: string) {
      this.name = name;
   }

   public greet(): void {
      console.log(`Hello, my name is ${this.name}`);
   }
}

// Generics
// generic memungkinkan pembuatan tipe data yang flexsibel dan dinamis
function identity<T>(value: T): T {
   return value;
}

const result = identity<string>("Hello");
const result2 = identity<number>(10);
const result3 = identity<boolean>(true);

class Box<T> {
   private value: T;

   constructor(value: T) {
      this.value = value;
   }

   getValue(): T {
      return this.value;
   }
}

const box = new Box<string>("Riki");

// Type Utilities
// Partial
interface Person3 {
   name: string;
   age: number;
}

const person3: Partial<Person3> = {
   name: "Riki",
}

// readonly
let readonlyUser: Readonly<Person3> = {
   name: "Riki",
   age: 20,
}

// readonlyUser.name = "Ridwan"; // error

type Username = Pick<Person3, "name">; // string
const username: Username = {
   name: "Riki", // string
}
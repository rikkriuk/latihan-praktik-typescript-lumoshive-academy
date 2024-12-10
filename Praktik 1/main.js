"use strict";
// tipe data dasar pada typescipt
// string
const fullName = "Riki Ridwan";
const address = "Jakarta";
// number
const age = 20;
// boolean
const isMarried = false;
// tipe data array
const hobbies = ["coding", "reading", "gaming"];
const numbers = [1, 2, 3, 4, 5];
const booleans = [true, false, true];
const mixed = ["Riki", 20, true];
const array = ["Riki", "Ridwan"];
// tipe data any
const any = "Riki";
// null dan undefined
const nullValue = null;
const undefinedValue = undefined;
// tipe data object
const person = {
    name: "Riki",
    age: 21,
    isMarried: false,
};
const person2 = {
    name: "Riki",
    age: 21,
    isMarried: false,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
// tipe data tuple
// tuple
const tuple = ["Riki", 20, true];
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Status;
(function (Status) {
    Status["Active"] = "active";
    Status["Inactive"] = "inactive";
})(Status || (Status = {}));
if (Status.Active === "active") {
    console.log("Status is active");
}
else {
    console.log("Status is inactive");
}
// function
function greet(name) {
    return `Hello, ${name}!`;
}
function greet3(name) {
    console.log(`Hello, ${name}!`);
}
const greet2 = (name) => `Hello, ${name}!`;
function opsional(name, age) {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    }
    return `Hello, ${name}!`;
}
const point = {
    x: 10,
    y: 20,
};
let id;
id = "string";
id = 1;
const adminUser = {
    adminId: 1,
    name: "Riki",
};
// class pada typescript
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound`);
    }
}
const dog = new Animal("Dog");
dog.makeSound();
// inheritance
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
}
// Access Modifiers
// public, private, protected
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
// Generics
// generic memungkinkan pembuatan tipe data yang flexsibel dan dinamis
function identity(value) {
    return value;
}
const result = identity("Hello");
const result2 = identity(10);
const result3 = identity(true);
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
const box = new Box("Riki");
const person3 = {
    name: "Riki",
};
// readonly
let readonlyUser = {
    name: "Riki",
    age: 20,
};
const username = {
    name: "Riki", // string
};

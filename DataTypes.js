// JavaScript has various data types that are divided into two categories: primitive types and non-primitive (reference) types.

// 1. Primitive Data Types
// These are the basic types that are immutable (cannot be changed). They store a single value and are compared by value.

// Number: Represents both integer and floating-point numbers.


let num = 42;
let price = 99.99;
// String: Represents a sequence of characters, surrounded by single, double, or backticks (for template literals).


let name = "Alice";
let greeting = `Hello, ${name}!`;  // Template literals
// Boolean: Represents true or false.


let isActive = true;
let hasCompleted = false;
// Undefined: A variable that has been declared but not yet assigned a value.


let x;
console.log(x);  // undefined
// Null: Represents the intentional absence of any object value. It's often used to signify "no value."


let obj = null;
// Symbol: Introduced in ES6, a Symbol is a unique and immutable value used as a key for object properties.


let sym = Symbol('unique');
// BigInt: Introduced in ES2020, BigInt is used to represent integers that are too large for the Number type to handle (greater than 2^53 - 1).


let bigIntNum = 123456789012345678901234567890n;
// 2. Non-Primitive (Reference) Data Types
// These types are mutable and store collections or complex values. They are compared by reference.

// Object: A collection of key-value pairs. Objects can store multiple properties and methods.


let person = { name: "Alice", age: 25 };
console.log(person.name);  // "Alice"
// Array: A special type of object that represents a list-like structure. Arrays store multiple values in a single variable and are zero-indexed.


let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);  // "apple"
// Function: Functions are first-class objects in JavaScript. They can be assigned to variables, passed as arguments, and returned from other functions.


function greet() {
  return "Hello, world!";
}
console.log(greet());  // "Hello, world!"
// Date: Represents a specific point in time.



let today = new Date();
console.log(today);  // Current date and time
// Type Checking in JavaScript
// typeof operator: Used to determine the type of a variable.

console.log(typeof 42);  // "number"
console.log(typeof "hello");  // "string"
console.log(typeof true);  // "boolean"
console.log(typeof {});  // "object"
console.log(typeof undefined);  // "undefined"
// console.log(typeof null);  // "object"  (This is a quirk of JavaScript)


// Summary of JavaScript Data Types:

// Primitive: Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Non-Primitive (Reference): Object, Array, Function, Date
// These types give JavaScript flexibility to handle various kinds of data and operations.
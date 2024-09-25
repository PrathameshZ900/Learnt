// Numbers in JavaScript
// Creating Numbers:

// You can define numbers directly (e.g., const score = 400) or create them using the Number object (e.g., const balance = new Number(100)).
// Numbers can be integers or floating-point numbers.

// Useful Number Methods:

// toString(): Converts the number to a string.
balance.toString(); // "100"

// length on string: Can check the length of the number when converted to a string.
balance.toString().length; // 3

// toFixed(digits): Rounds the number to a specified number of decimal places. Returns a string.
balance.toFixed(1); // "100.0"

// toPrecision(digits): Formats the number to a specified number of significant digits.
otherNumber.toPrecision(4); // "123.9"

// toLocaleString('en-IN'): Formats a number with commas for readability, according to the locale.
hundreds.toLocaleString('en-IN'); // "10,00,000"

// Math Object in JavaScript
// The Math object provides properties and methods for mathematical constants and functions. It's not a constructor, so all methods are static.

// Basic Methods:

// Math.abs(value): Returns the absolute value.
Math.abs(-4); // 4

// Math.round(value): Rounds the value to the nearest integer.
Math.round(4.6); // 5

// Math.ceil(value): Rounds the value up to the nearest integer.
Math.ceil(4.2); // 5

// Math.floor(value): Rounds the value down to the nearest integer.
Math.floor(4.9); // 4

// Min and Max:

// Math.min(...values): Returns the smallest value from a list of numbers.
Math.min(4, 3, 6, 8); // 3

// Math.max(...values): Returns the largest value from a list of numbers.
Math.max(4, 3, 6, 8); // 8

// Random Numbers:

// Math.random(): Returns a random floating-point number between 0 and 1 (but not 1).
Math.random(); // e.g., 0.764928383

// Generating a random number within a specific range:

// Random number between 0 and 10:
Math.random() * 10; // e.g., 7.52

// Random integer between 1 and 10:
Math.floor(Math.random() * 10) + 1; // e.g., 3

// Random number between two values (min and max):
const min = 10;
const max = 20;
Math.floor(Math.random() * (max - min + 1)) + min;
// This gives a random integer between min and max, inclusive.

// Summary:
// JavaScript numbers can be manipulated using methods like toString(), toFixed(), toPrecision(), and toLocaleString().
// The Math object provides useful functions for rounding, generating random numbers, and finding the minimum/maximum.
// Random number generation is a common interview question. Use Math.random() and Math.floor() to generate integers within specific ranges.

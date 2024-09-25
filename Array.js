
// Arrays in JavaScript

// Creating Arrays:

const myArr = [0, 1, 2, 3, 4, 5]; // Array literal
const myHeroes = ["shaktiman", "naagraj"]; // Array of strings

const myArr2 = new Array(1, 2, 3, 4); // Using the Array constructor

// Accessing Array Elements:
console.log(myArr[1]); // Access elements by index (0-based index)

// Array Methods:

// Push: Adds element(s) to the end of the array
myArr.push(6);
myArr.push(7);

// Pop: Removes the last element from the array
myArr.pop();

// Unshift: Adds element(s) to the beginning of the array
myArr.unshift(9);

// Shift: Removes the first element from the array
myArr.shift();

// Includes: Checks if an element is in the array
console.log(myArr.includes(9)); // true or false

// IndexOf: Returns the index of an element, or -1 if not found
console.log(myArr.indexOf(3)); // Example: 3

// Join: Converts all array elements into a string, separated by commas
const newArr = myArr.join();
console.log(newArr); // Example: "0,1,2,3"

// Slice and Splice:

// Slice: Returns a shallow copy of a portion of the array without modifying it
const myn1 = myArr.slice(1, 3); // Slice from index 1 to index 3 (exclusive)
console.log(myn1); // [1, 2]

// Splice: Modifies the array by removing or adding elements
const myn2 = myArr.splice(1, 3); // Removes 3 elements starting from index 1
console.log(myn2); // [1, 2, 3]

// Concatenation and Spread:

// Concatenate two arrays
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
const all_new_heros = [...marvel_heros, ...dc_heros]; // Spread operator to merge arrays

// Flattening Arrays:

// Flatten deeply nested arrays using flat()
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity); // Flatten to any depth
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking if an Object is an Array:

console.log(Array.isArray("Hitesh")); // false
console.log(Array.isArray(myArr)); // true

// Creating Arrays from Other Structures:

// Array from a string (each character becomes an element)
console.log(Array.from("Hitesh")); // ['H', 'i', 't', 'e', 's', 'h']

// Array from an object (results in an empty array unless it's array-like)
console.log(Array.from({name: "Hitesh"})); // [] (not array-like)

// Array.of(): Creates a new array from the given arguments
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

// Summary:
// JavaScript arrays are versatile and support a variety of methods for manipulation such as push, pop, slice, and splice.
// Arrays can be checked using Array.isArray(), and we can create new arrays from iterable objects with Array.from().
// Concatenation and flattening are key operations when working with multi-dimensional arrays.

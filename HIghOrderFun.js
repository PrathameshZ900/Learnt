// Here’s an interview-ready breakdown of the code examples you shared, focusing on JavaScript iteration methods (for, forEach, filter, and reduce), object iteration, and how they can be explained in a technical interview context.

// JavaScript Iteration Methods: Interview Notes
// 1. Iterating Over Objects with for...in
// The for...in loop allows you to iterate over the properties of an object.

for (const key in object) {
  // code block
}


// Example:

const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'ruby',
  swift: 'swift by apple'
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}
// Explanation:
// The for...in loop iterates over enumerable properties (keys) of an object. In this case, it loops through the keys (js, cpp, etc.) and logs their corresponding values.
// Interviewers may ask how to differentiate for...in (for objects) from for...of (for iterables like arrays).
// 2. Iterating Arrays with for...in
// When used with arrays, for...in iterates over the index values (not the actual elements).

// Example:

const programming = ['js', 'rb', 'py', 'java', 'cpp'];

for (const key in programming) {
  console.log(programming[key]); // Logs each language
}
// Explanation:
// for...in gives you the array index as the key, which you can use to access the array elements.
// However, using for...of or forEach is preferred when directly iterating over array elements.
// 3. forEach for Arrays
// The forEach method is used to execute a function once for each element in an array.

array.forEach(function(currentValue, index, array) {
  // code block
});


// Example:

const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

coding.forEach((item) => {
  console.log(item); // Logs each programming language
});


// Explanation:
// forEach is useful for executing side effects (like logging or manipulating DOM elements) for each element in an array.
// Interview Tip: Unlike map, forEach doesn’t return a new array, so it's used for actions, not transformations.
// 4. filter Method
// The filter method creates a new array with elements that pass a certain condition.



const newArray = array.filter(function(currentValue) {
  return condition;
});



// Example:

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992 },
  { title: 'Book Three', genre: 'History', publish: 1999 }
];

let filteredBooks = books.filter((book) => book.genre === 'History');
console.log(filteredBooks);



// Explanation:
// filter is used to extract elements from an array that meet specific criteria (like genre or year of publication).
// Interview Tip: Be ready to explain how filter doesn't mutate the original array but instead returns a new array.
// 5. reduce Method
// The reduce method is used to reduce an array to a single value, such as summing values.


const result = array.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, initialValue);



// Example 1: Sum of Numbers

const myNums = [1, 2, 3];

const total = myNums.reduce((acc, curr) => acc + curr, 0);
console.log(total); // Output: 6



// Example 2: Total Price Calculation

const shoppingCart = [
  { itemName: 'js course', price: 2999 },
  { itemName: 'py course', price: 999 },
  { itemName: 'mobile dev course', price: 5999 }
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay); // Output: 9997


// Explanation:
// reduce is a powerful method for aggregation, like summing numbers or combining data. It iterates through the array and keeps track of an accumulator.
// Interview Tip: Be prepared to explain the role of the accumulator and initial value.
// 6. Combining filter and reduce
// These two methods can be combined to filter a list and then perform calculations.

// Example:

let userBooks = books
  .filter((book) => book.publish >= 1995 && book.genre === 'History')
  .reduce((acc, book) => acc + 1, 0);
console.log(userBooks); // Output: Number of books after 1995 in History genre



// Explanation:
// Combining these methods demonstrates your ability to chain functions in a functional programming style.
// Interview Tip: Explain how chaining works and how to avoid unnecessary operations to optimize performance.
// Key Points for Interviews:
// for Loop: Classic iteration with index control; flexible but not always the most efficient.
// forEach: Best for performing side effects on each array element; doesn't return anything.
// filter: Creates a new array with elements that meet a condition; ideal for selection operations.
// reduce: Aggregates array data to a single value; great for summing, counting, or building complex objects.
// Chaining Methods: Demonstrates a strong grasp of functional programming in JavaScript.
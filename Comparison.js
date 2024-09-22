// 1. Loose Equality (==)
// Loose equality allows type coercion, meaning JavaScript converts the types to be the same before making the comparison. This can result in some surprising outcomes.

// Examples of Loose Equality Comparisons:
// Number and String:


1 == "1"; // true (string "1" is coerced to number 1)
0 == "";  // true (empty string is coerced to number 0)


// Boolean and Number:

true == 1;   // true (true is coerced to 1)
false == 0;  // true (false is coerced to 0)



// Null and Undefined:
null == undefined; // true (these are considered equal in loose comparison)

// Objects and Primitives:

[] == "";       // true (empty array is coerced to an empty string)
[] == 0;        // true (empty array is coerced to number 0)
[1] == "1";     // true (array with one element is coerced to a string)
// {} == {};       // false (different object references)


// Special Cases:

NaN == NaN;     // false (NaN is not equal to anything, including itself)
null == false;  // false
undefined == 0; // false



// 2. Strict Equality (===)
// Strict equality does not allow type coercion. The two values must be of the same type and have the same value to be considered equal. It is generally preferred to avoid unexpected type coercion issues.

// Examples of Strict Equality Comparisons:
// Number and String:

1 === "1"; // false (no type coercion, different types)
0 === "";  // false (no type coercion, different types)



// Boolean and Number:

true === 1;   // false (different types: boolean vs number)
false === 0;  // false (different types: boolean vs number)


// Null and Undefined:

null === undefined; // false (different types)


// Objects and Primitives:

// [] === "";       // false (different types: array vs string)
// [] === 0;        // false (different types: array vs number)
// [1] === "1";     // false (different types: array vs string)
// {} === {};       // false (different object references)


// Special Cases:
NaN === NaN;     // false (NaN is not equal to itself)
null === false;  // false (different types)
undefined === 0; // false (different types)


// 3. Comparison Between Data Types:
// JavaScript allows comparison between different data types. However, it follows certain rules when converting types for comparisons.

// String and Number Comparisons:
// In loose equality, strings are converted to numbers for comparison.

"5" > 2;  // true (string "5" is coerced to number 5)
"10" < 5; // false (string "10" is coerced to number 10)
// Boolean Comparisons:
// Booleans are coerced to numbers when compared to numbers.


true > 0;   // true (true is coerced to 1)
false < 1;  // true (false is coerced to 0)
// Null and Undefined Comparisons:
// null and undefined are considered equal with loose equality, but they are not strictly equal.
// When compared with numbers, null is coerced to 0, while undefined is treated as NaN.

null == undefined;  // true (loose equality)
null === undefined; // false (strict equality)
null > 0;           // false (null is coerced to 0)
undefined > 0;      // false (undefined is coerced to NaN)


// 4. Object Comparisons:
// Objects are only strictly equal if they reference the same object in memory, even if their content is identical.


let obj1 = {};
let obj2 = {};
obj1 == obj2;  // false (different references)
obj1 === obj2; // false (different references)

let obj3 = obj1;
obj1 == obj3;  // true (same reference)
obj1 === obj3; // true (same reference)




// Key Differences:
// Loose Equality (==): Converts types to the same type before comparing, which can lead to unexpected results.
// Strict Equality (===): Compares both value and type without converting types, making it more predictable and reliable.
// Best Practices:
// Use === (strict equality) whenever possible to avoid unexpected type coercion.
// Reserve == (loose equality) for cases where you specifically want to allow type conversion, though this is often rare in well-structured code.
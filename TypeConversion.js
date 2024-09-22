// 1. Implicit Type Conversion (Type Coercion)
// JavaScript automatically converts data types during certain operations. This can lead to unexpected results if not properly understood.

// Examples of Implicit Conversion:
// String Conversion: When a number or boolean is added to a string, JavaScript converts it to a string.


let result = "The answer is " + 42; // "The answer is 42"
let truthy = "Value is " + true;    // "Value is true"
// Numeric Conversion: When a string is used in a numeric context (such as subtraction), JavaScript attempts to convert it into a number.


let diff = "10" - 5;    // 5
let sum = "10" + 5;     // "105" (addition with string concatenates)
// Boolean Conversion: Values like 0, "", null, undefined, and NaN are converted to false in a boolean context. Non-zero numbers and non-empty strings convert to true.


if (0) { /* won't execute */ }
if ("non-empty") { /* executes */ }
// Common Coercion Scenarios:
// Equality (==): When using ==, JavaScript converts the types to the same type before comparison. This can result in unexpected outcomes.


1 == "1";  // true
true == 1; // true
// Always prefer using === (strict equality) to avoid implicit type conversions.

// 2. Explicit Type Conversion (Type Casting)
// This involves explicitly converting a value from one type to another using JavaScript functions.

// String Conversion:
// You can convert any value to a string using String() or .toString().

String(123);      // "123"
(456).toString(); // "456"
// Number Conversion:
// Use Number(), parseInt(), or parseFloat() to convert strings or other values to numbers.


Number("123");      // 123
parseInt("100px");  // 100
parseFloat("3.14"); // 3.14
// Boolean Conversion:
// Use Boolean() to convert a value into a boolean (true or false).


Boolean(1);        // true
Boolean(0);        // false
Boolean("Hello");  // true
Boolean("");       // false
// Other Conversions:
// Array.toString() converts arrays to a comma-separated string.


[1, 2, 3].toString(); // "1,2,3"
// Date.toString() converts a Date object to a string.

(new Date()).toString(); // "Sat Sep 22 2024 ..."
// Key Points:
// Implicit Conversion: Happens automatically in certain operations (addition, comparison, etc.).
// Explicit Conversion: Done manually using functions like String(), Number(), Boolean(), etc.
// Use strict equality (===) to avoid type coercion during comparison.
// Be cautious of implicit coercion in operations involving both strings and numbers, as they can produce unintended results.
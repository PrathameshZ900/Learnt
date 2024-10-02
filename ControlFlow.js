// # JavaScript Interview Perspective and Detailed Notes

// ## Conditional Statements and Logical Operators
// JavaScript offers several ways to handle conditional logic, using `if-else`, `switch`, and ternary operators. Here’s a detailed breakdown:

// ### if-else Conditions:
// These are the most commonly used conditional statements. The `if` block runs if the condition is `true`, otherwise the `else` block executes.

const temperature = 41;

if (temperature === 40) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
// Logical Operators:
// JavaScript provides && (AND), || (OR), and ! (NOT) for handling multiple conditions:

// AND (&&): All conditions must be true for the block to execute.
// OR (||): Only one condition needs to be true.


if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


// Truthy and Falsy Values:
// In JavaScript, values are either truthy or falsy:

// Falsy: false, 0, "", null, undefined, NaN
// Truthy: Everything else like non-empty strings, arrays, objects.

const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// Switch Statements
// switch is used for multiple condition checks based on a single variable.


const month = "march";

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "march":
        console.log("march");
        break;
    default:
        console.log("default case match");
}
// Nullish Coalescing Operator (??)
// The nullish coalescing operator returns the right-hand value if the left-hand value is null or undefined. This is useful when setting default values.


let val1 = null ?? 10 ?? 20;  // Output: 10
// Ternary Operator
// The ternary operator is a shorthand for if-else statements. The syntax is:


condition ? expression_if_true : expression_if_false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
// Object and Array Handling
// To check if an object or array is empty:

Arrays: userEmail.length === 0
Objects: Object.keys(obj).length === 0

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// Important Interview Tips:
// Understand Truthy and Falsy values: Knowing what JavaScript considers false can help avoid bugs.
// Ternary Operator: Master the shorthand syntax for better readability.
// Switch Statements: Use these when multiple conditions on a single value need checking.
// Nullish Coalescing Operator: This is a newer addition to JavaScript, useful in setting default values.
// Scope Awareness: Be mindful of variable scope, especially when using let and const in block-scoped statements like if and loops.
// Logical Operators: Practice how && and || behave in various conditions, especially when handling different data types.
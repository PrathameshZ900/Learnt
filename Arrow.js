
// Key Concepts in the Code:

// 1. Object Methods and 'this' keyword:

// The 'user' object has a method 'welcomeMessage' that uses 'this' to refer to the object it's called on.

// Example:

const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// When 'user.welcomeMessage()' is called, 'this' refers to the 'user' object, allowing it to access the 'username' and other properties.

// Example of changing property and calling the method again:

user.welcomeMessage();  // Output: "hitesh, welcome to website"
user.username = "sam";
user.welcomeMessage();  // Output: "sam, welcome to website"


// 2. Arrow Functions and 'this':

// Arrow functions don't have their own 'this'. Instead, they inherit 'this' from their surrounding context (lexical 'this').

// Example:

const chai = () => {
    let username = "hitesh";
    console.log(this);  // Logs the value of 'this' from the surrounding scope
}

chai();

// In this example, 'chai' is an arrow function. Inside the function, 'this' doesn't refer to the function itself but rather the outer scope, likely the global object (window in browsers).


// 3. Concise Arrow Function Syntax:

// Arrow functions can be written concisely without 'return' or curly braces when returning a single value.

// Example:

const addTwo = (num1, num2) => num1 + num2;

// This function simply returns the sum of 'num1' and 'num2'.

// For object literals, wrap the object in parentheses:

const addTwoa = (num1, num2) => ({ username: "hitesh" });


// 4. Higher-Order Array Methods (like 'forEach'):

// The 'forEach' method is used to iterate over arrays, applying a function to each element.

// Example:

const myArray = [2, 5, 3, 7, 8];
myArray.forEach((num) => console.log(num));  // Outputs each element of the array


// Interview-Based Questions:

// 1. What is the difference between function declarations and arrow functions with respect to 'this'?

// Answer: Regular functions have their own 'this', which refers to the object on which the function was called. Arrow functions, on the other hand, inherit 'this' from the surrounding lexical context. In arrow functions, 'this' does not refer to the object itself, and trying to use 'this' inside an arrow function behaves differently than in a regular function.


// 2. What happens when you reassign 'user.username' and call 'user.welcomeMessage()' again?

// Answer: Reassigning 'user.username' will update the 'username' property in the 'user' object. When 'user.welcomeMessage()' is called again, it will reflect the updated 'username'.


// 3. Why is 'this' undefined or different inside an arrow function?

// Answer: Arrow functions do not have their own 'this'. They inherit 'this' from the surrounding lexical context, meaning that 'this' refers to the value of 'this' in the scope where the arrow function was defined.


// 4. How does the concise syntax of arrow functions differ from traditional function expressions?

// Answer: Arrow functions can omit the 'return' keyword and curly braces '{}' if they return a single expression. They also allow returning objects directly by wrapping them in parentheses. Traditional functions require the use of 'return' and '{}' even for single expressions.


// 5. What are the implications of using arrow functions inside objects when trying to access object properties?

// Answer: If an arrow function is used as a method inside an object, it will not have access to the object’s properties through 'this'. Instead, it will refer to 'this' from the outer lexical scope, which may not be the object itself.


// 6. Can you explain the 'forEach' method and its purpose?

// Answer: The 'forEach' method is used to execute a provided function once for each array element. It is often used to iterate over arrays and perform side effects (like logging or updating DOM elements), but it does not return a new array (unlike 'map' or 'filter').



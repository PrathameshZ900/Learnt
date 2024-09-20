// In JavaScript, variables can be declared using three keywords: var, let, and const. Here's a brief explanation of each:

// 1. var:
// Scope: Function-scoped, meaning it's available within the function it is declared in. If declared outside any function, it's globally scoped.
// Hoisting: var declarations are hoisted to the top of their scope, meaning they are available before their actual declaration (though initialized as undefined).
// Redeclaration: Variables declared with var can be redeclared and updated within the same scope.


// Example:
// javascript

var x = 10;
function test() {
  var x = 20;  // This is a different 'x' within the function scope
  console.log(x);  // 20
}
console.log(x);  // 10


// 2. let:
// Scope: Block-scoped, meaning it is only available within the block ({}) it is declared in.
// Hoisting: Like var, let is hoisted, but it is not initialized before its declaration, meaning accessing it before declaration results in a ReferenceError (Temporal Dead Zone).
// Redeclaration: You cannot redeclare a let variable in the same scope, but you can update it.

// Example:
// javascript

let y = 5;
if (true) {
  let y = 15;  // This 'y' is only within the block
  console.log(y);  // 15
}
console.log(y);  // 5


// 3. const:
// Scope: Block-scoped like let.
// Hoisting: const is also hoisted but remains uninitialized in the Temporal Dead Zone until its declaration.
// Immutability: const variables cannot be reassigned once they are initialized, but if the value is an object or array, you can still modify the properties or elements of that object/array.
// Example:

const z = 30;
// z = 40;  // Error: Assignment to constant variable

const obj = { a: 1 };
obj.a = 2;  // Allowed: modifying the property of the object
console.log(obj.a);  // 2


// Summary:
// Use var when you need function-scoped variables (though it is less common nowadays).
// Use let for block-scoped variables that might need to be reassigned.
// Use const for block-scoped variables that you don’t want to be reassigned (commonly used for constants or objects/arrays).
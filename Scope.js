// Global and Local Scope in JavaScript

// Scope in JavaScript determines the accessibility of variables, functions, and objects. 
// JavaScript has two main types of scope: Global and Local (or Function Scope).

// 1. Global Scope: 
//    - Variables declared outside of any function are in the global scope.
//    - These variables are accessible from any part of the code, including functions and blocks.
//    - The global scope is typically the window object in the browser.

//    Example:

   var globalVar = "I am global";  // Global scope

   function displayGlobalVar() {
       console.log(globalVar);  // Accessible inside the function
   }

   displayGlobalVar();  // Output: I am global

// 2. Local (Function) Scope:
//    - Variables declared inside a function are in the local scope.
//    - These variables can only be accessed within the function where they were declared.

//    Example:
   function localScopeExample() {
       var localVar = "I am local";
       console.log(localVar);  // Accessible only within this function
   }

   localScopeExample();  // Output: I am local
   console.log(localVar);  // Error: localVar is not defined

// 3. Block Scope:
//    - let and const create block-scoped variables, which means they are confined to the block 
//      (e.g., if, for, or while statements) in which they are declared.

//    Example:
   if (true) {
       let blockVar = "I am block scoped";
       console.log(blockVar);  // Accessible here
   }

   console.log(blockVar);  // Error: blockVar is not defined

// 4. Scope Chain:
//    - When a variable is called, JavaScript starts searching for it in the current scope. 
//      If it can't find it, it moves up to the next scope in the chain, all the way up to the global scope.

//    Example:
   var globalVar = "Global";

   function outerFunction() {
       var outerVar = "Outer";

       function innerFunction() {
           var innerVar = "Inner";
           console.log(innerVar);  // Output: Inner
           console.log(outerVar);  // Output: Outer
           console.log(globalVar);  // Output: Global
       }

       innerFunction();
   }

   outerFunction();

// ---

// Interview-Based Questions on Scope in JavaScript:

// 1. What is the difference between global and local scope in JavaScript?
//    - Answer: Global scope allows variables to be accessed anywhere in the program, 
//      while local scope restricts variable access to within the function where it was defined.

// 2. How do let, var, and const differ in terms of scope?
//    - Answer: var is function-scoped, meaning it is scoped to the function or globally if declared outside of a function. 
//      let and const are block-scoped, meaning they are scoped to the nearest enclosing block (like an if or for block).

// 3. What is a closure in JavaScript? How does it relate to scope?
//    - Answer: A closure is a function that retains access to variables from its outer function scope 
//      even after the outer function has returned. Closures are closely related to scope because 
//      they "close over" the variables they reference from the outer scope.

// 4. What is the scope chain and how does JavaScript use it?
//    - Answer: The scope chain refers to the order in which JavaScript looks for variables. 
//      When a variable is used, JavaScript first looks in the local scope, and if it can't find it, 
//      it moves up the chain to the outer scope, continuing this process until it reaches the global scope.

// 5. What happens when a variable is declared globally and locally with the same name?
//    - Answer: The local variable will shadow the global variable inside its scope, 
//      meaning the local variable will be used within that function or block, 
//      while the global variable will remain unchanged and accessible outside of the local scope.

// Interview Questions Related to Scope in JavaScript:

/*
1. What is the difference between var, let, and const in terms of scoping?
   - 'var' is function-scoped, while 'let' and 'const' are block-scoped. 'const' is used for variables that should not be reassigned.
   
2. Explain what function scope and block scope mean in JavaScript.
   - Function scope restricts the visibility of a variable to within the function, while block scope restricts it to within curly braces of loops, conditionals, etc.

3. What happens if you declare a variable with 'let' or 'const' inside a block? Can it be accessed outside the block?
   - Variables declared with 'let' or 'const' inside a block are only accessible within that block. They cannot be accessed outside of it.

4. Can functions access variables defined outside their scope? What is this phenomenon called?
   - Yes, functions can access variables from their outer scope, a concept known as lexical scoping.

5. In the code provided, why does the 'addTwo(5)' function call throw an error while 'addone(5)' works fine?
   - 'addone' is a function declaration, hoisted to the top of its scope. 'addTwo' is a function expression, which is not hoisted. Therefore, calling 'addTwo' before its declaration throws an error.

6. What is the Temporal Dead Zone in JavaScript?
   - The Temporal Dead Zone is the time between entering the scope where a 'let' or 'const' variable is declared and its actual initialization. Accessing the variable before initialization results in a ReferenceError.
   
7. Can you explain the concept of variable hoisting in JavaScript?
   - Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope before code execution. However, 'let' and 'const' are hoisted differently, and accessing them before initialization leads to an error.

8. What is closure in JavaScript, and how is it demonstrated in the 'one' and 'two' functions?
   - Closure refers to the ability of a function to retain access to variables from its outer scope, even after the outer function has finished execution. In the 'one' and 'two' functions, 'two' can access 'username' due to closure.
*/

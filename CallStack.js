
// JavaScript is a single-threaded, non-blocking, and asynchronous language, and it uses an event-driven execution model. It executes code through a mechanism called the call stack, which is responsible for managing function calls and keeping track of the point in the code it’s currently executing.

// Here's how JavaScript executes code using the call stack and other related concepts:

// Key Concepts:
// Call Stack:

// The call stack is a data structure used by the JavaScript engine to keep track of function calls.
// It operates on the Last In, First Out (LIFO) principle, meaning the last function pushed onto the stack is the first to be popped off when it's done executing.
// Example:

function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
    third();
}

function third() {
    console.log("Third function");
}

first();

// Call Stack Execution:

// first() is pushed onto the call stack.
// Inside first(), second() is called, so second() is pushed onto the stack.
// Inside second(), third() is called, so third() is pushed onto the stack.
// Once third() finishes executing, it is popped off the stack, followed by second(), and finally first().
// Execution Context:

// Each time a function is invoked, an execution context is created, which stores information about the environment in which the function is being executed. The execution context contains things like:
// The value of this
// The reference to the outer environment (scope chain)
// The function’s arguments and local variables
// There is always a global execution context, which is created when the script starts running.
// Event Loop:

// JavaScript handles asynchronous code using the event loop. The event loop checks the call stack and the callback queue (where asynchronous tasks are placed) and moves tasks from the queue to the stack when the stack is empty.
// Example:


console.log('Start');

setTimeout(() => {
    console.log('Timeout callback');
}, 1000);

console.log('End');

// The setTimeout() callback is placed in the callback queue and only executed after the call stack is clear.
// Memory Heap:

// JavaScript uses the memory heap to allocate memory for objects and variables. The memory heap is a large, unstructured region of memory where objects are stored.
// Stack Overflow:

// If too many functions are pushed onto the call stack without being popped off, a stack overflow occurs.
// This happens in cases like infinite recursion:
 

function recursiveFunction() {
    recursiveFunction();
}

recursiveFunction();  // Results in a stack overflow error


// Interview-Based Questions on JavaScript Execution and the Call Stack:
// What is the call stack in JavaScript? How does it work?

// Answer: The call stack is a data structure used to manage function calls in JavaScript. It operates on a LIFO (Last In, First Out) principle. When a function is called, it is pushed onto the stack, and when the function finishes execution, it is popped off the stack.
// What is the difference between synchronous and asynchronous code in JavaScript?

// Answer: Synchronous code is executed line by line, blocking further execution until the current operation completes. Asynchronous code allows execution to continue without waiting for the operation to complete, utilizing mechanisms like callbacks, promises, and async/await to handle tasks in the background.
// What is the event loop and how does it work in JavaScript?

// Answer: The event loop is responsible for handling asynchronous tasks in JavaScript. It continuously checks the call stack, and when the stack is empty, it moves tasks from the callback queue (e.g., events, timers) to the call stack for execution.
// Can you explain what happens when a function is called in JavaScript?

// Answer: When a function is called, a new execution context is created and pushed onto the call stack. This execution context includes the function’s scope, arguments, and reference to the outer environment. The function is executed, and once it finishes, the execution context is popped off the stack.
// What happens if a recursive function doesn’t have a base case?

// Answer: If a recursive function doesn’t have a base case or if the recursion doesn’t terminate, it will cause a stack overflow. This happens because the function keeps being pushed onto the call stack without being popped off, eventually exceeding the stack’s capacity.
// What is stack overflow in JavaScript, and when does it occur?

// Answer: Stack overflow occurs when there is a recursion or excessive function calls that don't terminate, causing the call stack to exceed its limit. It leads to an error because JavaScript can’t handle more function calls.
// What is an execution context in JavaScript, and what does it contain?

// Answer: An execution context is the environment in which JavaScript code is executed. It contains the value of this, the scope chain (for accessing variables), and function arguments. A global execution context is created when the script starts running, and a new execution context is created each time a function is invoked.
// How does JavaScript handle asynchronous tasks like setTimeout()?

// Answer: Asynchronous tasks like setTimeout() are managed by the browser or runtime. When the timeout is reached, the callback is placed in the callback queue. The event loop checks the queue and pushes the callback onto the call stack when the stack is empty.
// What is the difference between the call stack and the callback queue in JavaScript?

// Answer: The call stack manages the execution of functions and operates on a LIFO basis. The callback queue stores asynchronous callbacks that are ready to be executed. The event loop moves tasks from the callback queue to the call stack when the stack is empty.
// Can you explain the concept of "blocking" in JavaScript?

// Answer: Blocking occurs when a synchronous operation (like a long-running function) prevents the execution of other code until the operation is complete. This is because JavaScript is single-threaded, so it can only execute one task at a time. Blocking code occupies the call stack, preventing the event loop from processing other tasks.
// Execution Flow:
// Global Execution Context is created.
// Functions and variables are hoisted.
// When a function is called, a new execution context is created and pushed onto the call stack.
// The function is executed, and once done, its context is popped from the stack.
// If asynchronous code is encountered, it is placed in the callback queue.
// Once the call stack is empty, the event loop pushes tasks from the callback queue to the call stack for execution.

// 1. Synchronous JavaScript
// Definition: In a synchronous environment, tasks are executed sequentially, meaning one task is completed before moving to the next. Each operation waits for the previous one to finish.
// Blocking nature: If a task takes a long time to complete (e.g., file I/O or network request), the entire program execution is paused, blocking other tasks.


// Example:

console.log('Start');
const data = fetchDataSync(); // Blocking call
console.log('Data:', data);
console.log('End');


// Drawback: For heavy tasks, synchronous operations can lead to performance bottlenecks, as the browser or server might become unresponsive.
// 2. Asynchronous JavaScript
// Definition: In asynchronous JavaScript, tasks can be executed independently of the main thread. It allows the program to initiate a task and move on to the next one without waiting for the first task to complete.
// Non-blocking nature: Instead of pausing for a task to complete, asynchronous code continues executing, and when the task is finished, it invokes a callback or a promise to handle the result.

// Example:

console.log('Start');
fetchDataAsync().then((data) => {
  console.log('Data:', data); // Callback executed later
});
console.log('End'); // This runs before fetch completes


// 3. Key Differences
// Execution Flow:
// Synchronous: Executes tasks one after the other in order. The next task only starts when the current one finishes.
// Asynchronous: Executes tasks concurrently, not waiting for one task to finish before starting the next.
// Performance:
// Synchronous: Can lead to performance issues in I/O-heavy operations (e.g., database queries or API requests).
// Asynchronous: Better suited for I/O-bound tasks, allowing the system to perform other operations while waiting for a long-running task to complete.
// Use Case:
// Synchronous: Best used for tasks where immediate execution is essential or where order is critical.
// Asynchronous: Ideal for tasks that take time (e.g., API calls, file handling) to avoid blocking the main thread.
// 4. Common Asynchronous Techniques
// Callbacks:

// Functions passed as arguments that are executed after an asynchronous task completes.


// Example:

function fetchData(callback) {
  setTimeout(() => {
    callback('Data fetched');
  }, 2000);
}
fetchData((result) => console.log(result));


// Drawback: Leads to callback hell when multiple callbacks are nested, making the code hard to maintain.
// Promises:

// A cleaner alternative to callbacks. A promise represents a value that will be available in the future (resolved or rejected).

// Example:

fetchDataAsync().then((data) => console.log(data)).catch((err) => console.error(err));
// Advantage: Avoids callback hell and provides more readable error handling via .catch().
// Async/Await:

// Introduced in ES2017, it allows writing asynchronous code in a more synchronous-looking style.

// Example:

async function fetchData() {
  try {
    const data = await fetchDataAsync();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
fetchData();


// Advantage: Simplifies error handling and improves readability over promises, especially with complex asynchronous workflows.
// 5. Event Loop
// Explanation: The event loop is central to understanding asynchronous behavior in JavaScript. It handles asynchronous callbacks by processing the call stack and the task queue.
// Interview Focus: You may be asked how the event loop works or to explain the difference between the call stack and the task queue. Make sure to understand how asynchronous code gets executed after synchronous code is processed.

// Example Interview Question:

console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
console.log('End');
// Answer: The output is:
// sql
// Copy code
// Start
// End
// Timeout
// This happens because setTimeout is asynchronous and its callback is added to the task queue, which the event loop processes after all synchronous code is executed.
// 6. Common Interview Questions
// Difference between synchronous and asynchronous JavaScript.
// How does JavaScript handle asynchronous code execution?
// Explain the event loop, task queue, and microtask queue.
// How would you handle multiple asynchronous calls and their results?
// Discuss strategies like using Promise.all for parallel execution or async/await for sequential execution.
// 7. Best Practices for Asynchronous JavaScript
// Error Handling: Always use .catch() for promises and try...catch with async/await to handle errors gracefully.
// Avoid Callback Hell: Structure your code using promises or async/await to avoid deeply nested callbacks.
// Debouncing and Throttling: Use these techniques to control the frequency of asynchronous calls, especially in UI events like scrolling or typing.
// In summary, explaining the differences between synchronous and asynchronous JavaScript in interviews requires both conceptual clarity and an understanding of real-world use cases. Be prepared to demonstrate your knowledge with code examples and by discussing how JavaScript handles asynchronous tasks through the event loop.



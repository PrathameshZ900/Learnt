// Here's a structured set of notes covering the key concepts of loops in JavaScript, including for, while, and do-while loops, along with break and 
// continue statements. This will help you prepare for interviews and improve your understanding of these concepts.

// JavaScript Looping Constructs: Interview Notes
// 1. for Loop
// The for loop is used to iterate over a block of code a certain number of times.

// Syntax:

for (initialization; condition; increment) {
    // code to be executed
}


// Example:

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element); // Prints numbers from 0 to 10
}


// Nested for Loops:
// You can nest for loops to perform more complex iterations.


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`); // Multiplication table
    }
}


// Iterating over Arrays:
// You can use a for loop to iterate over the elements of an array.

let myArray1 = ["flash", "batman", "superman"];
for (let index = 0; index < myArray1.length; index++) {
    const element = myArray1[index];
    console.log(element); // Prints each superhero name
}


// 2. break and continue
// break Statement:
// Used to exit a loop prematurely.

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break; // Exits the loop when index is 5
    }
    console.log(`Value of index is ${index}`);
}


// continue Statement:
// Used to skip the current iteration and continue with the next.

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue; // Skips the iteration when index is 5
    }
    console.log(`Value of index is ${index}`);
}


// 3. while Loop
// The while loop continues to execute as long as a specified condition is true.

// Syntax:

while (condition) {
    // code to be executed
}


// Example:

let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2; // Increment by 2
}


// Iterating over Arrays:
// You can use a while loop to iterate through an array as well.


let myArray = ['flash', "batman", "superman"];
let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`); // Prints each superhero name
    arr = arr + 1; // Increment index
}


// 4. do...while Loop
// The do...while loop is similar to the while loop, but it guarantees that the code will execute at least once.


do {
    // code to be executed
} while (condition);



// Example:

let score = 11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10); // Executes once even if score is greater than 10




// Important Tips for Interviews:
// Understand Loop Mechanics: Know how the loop initialization, condition, and increment/decrement work.
// Be Aware of Scope: Variables defined within loops (like let i) are scoped to that block.
// Nested Loops: Be comfortable writing and understanding nested loops, as they can be used for complex data structures.
// Break vs Continue: Clearly understand the difference between break (exits the loop) and continue (skips to the next iteration).
// Performance: Be aware of the performance implications of deeply nested loops and try to optimize them where possible.
// Function to log each letter of a name
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// Function to add two numbers and return the result
function addTwoNumbers(number1, number2){
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);

// Function to display a login message with default parameter
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());

// Function using rest parameters to handle multiple values
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

// Object representing a user
const user = {
    username: "hitesh",
    price: 199
};

// Function to handle object properties and log them
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
});

// Array of numbers
const myNewArray = [200, 400, 100, 600];

// Function to return the second value from an array
function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// Dates in JavaScript

// Creating Dates:

let myDate = new Date();
// Creates a new Date object with the current date and time.
// console.log(myDate.toString()); // Converts the Date object to a string representation of the date and time.
// console.log(myDate.toDateString()); // Returns the date part of the Date object as a human-readable string.
// console.log(myDate.toLocaleString()); // Converts the Date object to a string according to the local conventions.
// console.log(typeof myDate); // Returns 'object', as Date is a type of object in JavaScript.

// Creating Date for a specific time:

// Various ways to create a specific date:
let myCreatedDate = new Date(2023, 0, 23); // Year, Month (0-based index), Day
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3); // Year, Month, Day, Hour, Minutes
let myCreatedDate2 = new Date("2023-01-14"); // Using string format
let myCreatedDate3 = new Date("01-14-2023"); // MM-DD-YYYY format
// console.log(myCreatedDate.toLocaleString()); // Displays the created date in a local string format.

// Timestamps:

// Date.now(): Returns the number of milliseconds elapsed since January 1, 1970.
let myTimeStamp = Date.now();
// console.log(myTimeStamp); // Example: 1694958204175

// getTime(): Returns the timestamp of the date object.
console.log(myCreatedDate.getTime()); // Example: 1673644800000

// Converting the current timestamp to seconds:
console.log(Math.floor(Date.now()/1000)); // Example: 1694958204

// Working with Date Methods:

let newDate = new Date(); // Current date

// Get Month:
console.log(newDate.getMonth() + 1); // Months are zero-based (0 = January, 1 = February, etc.), so adding 1

// Get Day of the Week:
console.log(newDate.getDay()); // Returns day of the week as a number (0 = Sunday, 1 = Monday, etc.)

// Displaying Day Name:
newDate.toLocaleString('default', {
    weekday: "long", // This option formats the weekday as a full name (e.g., 'Monday')
});
// You can adjust locale and formatting options as needed for date and time.


// Summary:
// JavaScript Date objects represent a single moment in time in a platform-independent format.
// You can use Date methods to create, manipulate, and format dates and times.
// The 'Date.now()' method returns the current timestamp, and 'getTime()' retrieves the timestamp for a specific date.

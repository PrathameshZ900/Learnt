// 1. Introduction to Strings in JavaScript
// Definition: A string is a sequence of characters used to represent text in JavaScript. It is enclosed within single quotes ('...'), double quotes ("..."), or backticks (`...`).

let single = 'single-quoted';
let double = "double-quoted";
let backtickss = `backticks allow embedded variables like ${single}`;

// 2. String Properties and Methods
// String Properties:
// length: Returns the length of the string (number of characters).

let text1 = "Hello";
console.log(text1.length); // Output: 5
// Common String Methods:
// charAt(index): Returns the character at the specified index.

let text2 = "Hello";
// console.log(text2.charAt(1)); // Output: "e"

// charCodeAt(index): Returns the Unicode of the character at the specified index.

console.log(text.charCodeAt(1)); // Output: 101 (Unicode for "e")
concat(str1, str2)//Concatenates the string with others.

let greeting = "Hello".concat(" ", "World");
console.log(greeting); // Output: "Hello World"
includes(substring)// Checks if the string contains the specified substring (returns true or false).
 

console.log(greeting.includes("World")); // Output: true
indexOf(substring, start) //Returns the index of the first occurrence of the substring. Returns -1 if not found.

console.log(greeting.indexOf("World")); // Output: 6
lastIndexOf(substring)// Returns the index of the last occurrence of the substring.

console.log(greeting.lastIndexOf("l")); // Output: 9
replace(searchValue, newValue)// Replaces the first occurrence of searchValue with newValue.

console.log(greeting.replace("World", "there")); // Output: "Hello there"
replaceAll(searchValue, newValue)// Replaces all occurrences of searchValue.

let text = "Hello World, Hello Universe";
console.log(text.replaceAll("Hello", "Hi")); // Output: "Hi World, Hi Universe"
slice(start, end)// Extracts a section of the string based on the start and end index.

console.log(greeting.slice(0, 5)); // Output: "Hello"
split(separator, limit)// Splits a string into an array based on the separator.

let words = greeting.split(" ");
console.log(words); // Output: ["Hello", "World"]
substring(start, end)// Extracts characters from a string between the specified indexes.

console.log(greeting.substring(0, 5)); // Output: "Hello"
toLowerCase() / toUpperCase()// Converts the string to lowercase or uppercase.

console.log(greeting.toLowerCase()); // Output: "hello world"
console.log(greeting.toUpperCase()); // Output: "HELLO WORLD"
trim() / trimStart() / trimEnd()// Removes whitespace from both ends of the string (or only from the start/end).

let spaceStr = "   Hello World   ";
console.log(spaceStr.trim()); // Output: "Hello World"
repeat(count)// Repeats the string count times.

console.log("Ha!".repeat(3)); // Output: "Ha!Ha!Ha!"


// 3. Template Literals (ES6)
// Template literals allow string interpolation (inserting variables and expressions into strings) using backticks `...`.

let name = "John";
let greeting1 = `Hello, ${name}!`;
console.log(greeting1); // Output: "Hello, John!"


// 4. String Immutability
// Strings in JavaScript are immutable. This means that once a string is created, it cannot be changed. However, you can create a new string based on modifications of the original.

let str = "Hello";
str[0] = "h"; // This won't work
str = "hello"; // This is a new string


// 5. String Comparison
// Strict Equality (===): Compares both value and type.

console.log("hello" === "hello"); // Output: true
console.log("hello" === "Hello"); // Output: false


// Locale Compare: localeCompare() method compares strings in a locale-sensitive manner (important for sorting).

console.log('a'.localeCompare('b')); // Output: -1 (because 'a' comes before 'b')


// 6. Interview-Level Questions
// 1. Reverse a String:

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"


// 2. Check if a String is a Palindrome:

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // Output: true


// 3. Count Vowels in a String:

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
console.log(countVowels("Hello World")); // Output: 3


// 4. Longest Word in a String:

function longestWord(str) {
    let words = str.split(' ');
    let maxWord = '';
    for (let word of words) {
        if (word.length > maxWord.length) maxWord = word;
    }
    return maxWord;
}
console.log(longestWord("The quick brown fox")); // Output: "quick"


// 5. Anagram Check:

function isAnagram(str1, str2) {
    let normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(isAnagram("listen", "silent")); // Output: true


// 7. Advanced Topics
// 1. String Interning
// JavaScript internally reuses common string objects to save memory. This process is known as "string interning."
// For instance, two string literals with the same value will reference the same object in memory.
// 8. String Optimization Tips
// Use template literals instead of concatenation (+) for better readability and performance.

// Minimize unnecessary string creation since strings are immutable.

// Use indexOf for search operations over includes for slightly better performance in large-scale applications.

// Conclusion
// Mastering strings in JavaScript is essential for technical interviews. Understanding string manipulation methods, performance optimizations, and solving algorithmic problems related to strings will help you stand out during interviews.
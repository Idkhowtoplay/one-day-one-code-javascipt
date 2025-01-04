// JavaScript Cheatsheet

// Variables
let x = 10; // Block-scoped variable
const y = 20; // Block-scoped constant
var z = 30; // Function-scoped variable

// Data Types
let string = "Hello, World!"; // String
let number = 123; // Number
let boolean = true; // Boolean
let array = [1, 2, 3]; // Array
let object = { key: "value" }; // Object
let nullValue = null; // Null
let undefinedValue; // Undefined

// Functions
function sayHello(name) {
  return `Hello, ${name}!`;
}
const add = (a, b) => a + b; // Arrow function

// JSON (JavaScript Object Notation)
const jsonObject = {
  name: "John Doe",
  age: 30,
  skills: ["JavaScript", "React", "Node.js"]
};

// Convert object to JSON string
const jsonString = JSON.stringify(jsonObject);
console.log(jsonString);

// Parse JSON string back to object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i); // For loop
}

const arrayElements = ["a", "b", "c"];
arrayElements.forEach(element => console.log(element)); // ForEach loop

// Conditional Statements
if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is less than or equal to 5");
}

// Switch Statement
switch (x) {
  case 5:
    console.log("x is 5");
    break;
  case 10:
    console.log("x is 10");
    break;
  default:
    console.log("x is something else");
}

// Array Methods
const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Add to end
numbers.pop(); // Remove from end
numbers.shift(); // Remove from start
numbers.unshift(0); // Add to start
const doubled = numbers.map(num => num * 2); // Map
const filtered = numbers.filter(num => num > 3); // Filter
const sum = numbers.reduce((total, num) => total + num, 0); // Reduce
const includesThree = numbers.includes(3); // Check if array includes an element
const indexOfThree = numbers.indexOf(3); // Find index of an element
console.log(numbers);

// String Methods
const str = "JavaScript is fun";
console.log(str.length); // String length
console.log(str.toUpperCase()); // Convert to uppercase
console.log(str.toLowerCase()); // Convert to lowercase
console.log(str.includes("fun")); // Check if substring exists
console.log(str.split(" ")); // Split string into array
console.log(str.replace("fun", "awesome")); // Replace substring

// Operators
// Arithmetic Operators
console.log(5 + 3); // Addition
console.log(5 - 3); // Subtraction
console.log(5 * 3); // Multiplication
console.log(5 / 3); // Division
console.log(5 % 3); // Modulus
console.log(5 ** 3); // Exponentiation

// Comparison Operators
console.log(5 == "5"); // Equal to
console.log(5 === "5"); // Strict equal to
console.log(5 != "5"); // Not equal to
console.log(5 !== "5"); // Strict not equal to
console.log(5 > 3); // Greater than
console.log(5 < 3); // Less than
console.log(5 >= 3); // Greater than or equal to
console.log(5 <= 3); // Less than or equal to

// Logical Operators
console.log(true && false); // AND
console.log(true || false); // OR
console.log(!true); // NOT

// Assignment Operators
let a = 5;
a += 3; // a = a + 3
a -= 3; // a = a - 3
a *= 3; // a = a * 3
a /= 3; // a = a / 3
a %= 3; // a = a % 3
a **= 3; // a = a ** 3

// Objects
const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(person.getFullName());

// Date and Time
const currentDate = new Date();
console.log(currentDate);

// Error Handling
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.error(error.message);
}

// Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});
promise.then(result => console.log(result)).catch(error => console.error(error));

// Async/Await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// ES6 Features
const [a1, b1] = [1, 2]; // Array destructuring
const { key } = object; // Object destructuring
const spreadArray = [...numbers, 6, 7]; // Spread operator
const newObject = { ...object, newKey: "newValue" }; // Object spread

// Other Useful Features
// Template Literals
const greeting = `Hello, my name is ${person.firstName}.`;
console.log(greeting);

// Set Timeout and Set Interval
setTimeout(() => console.log("Executed after 1 second"), 1000);
const intervalId = setInterval(() => console.log("Repeating every second"), 1000);
setTimeout(() => clearInterval(intervalId), 5000); // Stop interval after 5 seconds

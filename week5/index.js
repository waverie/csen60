// console.log("hello world")
// alert('Hello world!');
window.document.write('<p>Welcome to CSEN 60!</p>');

// document.append('<p>This  should come after the h1</p>')

/* function to contribute the sum of numbers.
    Inputs: a, b nujmbers to be added.
    Output: returns the sum of a and b.
*/
// TODO fix this function

/**
 * @description this function adds two numbers
 * @param {*} a
 * @param {*} b
 * @returns
 */

function add(a, b) {
    return a + b;
}

const x = 100; // input variable
if (true) {
    x = 200; // same variable
}

console.log(x); // output 200

let y
y = null
let z = 0
console.log(y, z)

let greeting = "Hello, world!";
let response = `The time is ${new Date().getHours()}`;
console.log(response)

const age = 20;

if (age > 18) {
    console.log("You are of age");
    
} else {
    console.log('You arent at age. Please wait $(18 - age) years');
}
let isOverAge = (age > 18);

console.log("\n", isOverAge)

let person = {
    name: "John",
    age: 30,
    isStudent: false
};

console.log(person["age"])

console.log(typeof("hello world!"))

alert("This is a important message");

// Strict equality -- 1. are these the same type? 2. Are these the same value
console.log(3 === '3'); // false

// Loose equality
console.log(3 == '3'); // true
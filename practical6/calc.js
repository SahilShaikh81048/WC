// Filename: calculator.js
// AIM: Write a program for calculator using Node.

// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}

// --- Example Usage ---

// Define two numbers for calculation
const num1 = 20;
const num2 = 4;

console.log(`\n--- Node.js Calculator Results ---`);
console.log(`Using input values: ${num1} and ${num2}\n`);

// 1. Addition
console.log(`${num1} + ${num2} = ${add(num1, num2)}`);

// 2. Subtraction
console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);

// 3. Multiplication
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);

// 4. Division
console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);

// Example demonstrating the division by zero check
const num3 = 10;
const num4 = 0;
console.log(`\n${num3} / ${num4} = ${divide(num3, num4)}`);

console.log(`\n----------------------------------`);
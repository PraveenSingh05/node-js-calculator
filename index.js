// Import the crypto module for random number generation
const crypto = require('crypto');

// Function to perform addition
const add = (a, b) => a + b;

// Function to perform subtraction
const sub = (a, b) => a - b;

// Function to perform multiplication
const mult = (a, b) => a * b;

// Function to perform division
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

// Function to calculate sine of an angle in radians
const sin = (a) => Math.sin(a);

// Function to calculate cosine of an angle in radians
const cos = (a) => Math.cos(a);

// Function to calculate tangent of an angle in radians
const tan = (a) => Math.tan(a);

// Function to generate random number with specified length
const random = (length) => {
  if (!length) {
    console.log("Provide length for random number generation.");
    return;
  }
  const randomNumber = crypto.randomBytes(length).toString('binary');
  return randomNumber;
};

// Retrieve the command line arguments
const args = process.argv.slice(2);

// Validate the number of arguments
if (args.length < 2 && args[0] !== 'random') {
  console.log("Invalid number of arguments");
  process.exit(1);
}

// Get the operation and numbers from the command line arguments
const operation = args[0];
const numbers = args.slice(1).map(Number);

let result;

try {
  switch (operation) {
    case 'add':
      result = add(numbers[0], numbers[1]);
      break;
    case 'sub':
      result = sub(numbers[0], numbers[1]);
      break;
    case 'mult':
      result = mult(numbers[0], numbers[1]);
      break;
    case 'divide':
      result = divide(numbers[0], numbers[1]);
      break;
    case 'sin':
      result = sin(numbers[0]);
      break;
    case 'cos':
      result = cos(numbers[0]);
      break;
    case 'tan':
      result = tan(numbers[0]);
      break;
    case 'random':
      result = random(numbers[0]);
      break;
    default:
      console.log("Invalid operation");
      process.exit(1);
  }

  if (result !== undefined) {
    console.log(result);
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

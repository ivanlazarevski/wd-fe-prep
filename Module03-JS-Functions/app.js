// SWITCH STATEMENTS
// Rarely used in modern programming. People prefer If statements

const orderStatus = "open";
const deliverer = "Ivan";

switch (orderStatus) {
  case "open":
    console.log(`${deliverer} is headed towards the restaurant.`);
    break;
  case "pending":
    console.log(`${deliverer} is on his way to deliver your meal.`);
    break;
  case "delivered":
    console.log(`${deliverer} delivered your meal.`);
    break;
  default:
    console.log(`We don't know what's going on.`);
}

// FUNCTIONS
// Use it when a piece of code repeats.
// Give it a name, then declare what it does. When you need that piece of code, "call" that function by using its name

// This is where I tell the function what it's supposed to do
// This code is ONLY a definition. It will NOT run unless the function is called/executed.
function sayHello() {
  console.log("Hello from SEDC");
}

// This is where I tell the function to ACTUALLY do what it's supposed to do
// Aka function execution, or calling the function
// You can do it as many times as you want
logger();

// FUNCTIONS WITH ARGUMENTS
// Remember the machine example. Functions are like machines that have an input.
// You can put stuff in the machine through that input, and the machine will do something with that stuff
function logger(message, author) {
  console.log(`${author} says: ${message} Remember it well!`);
}

logger("Your GPU is overheating.", "Heat application");
logger(`Learn Javascript. It's really fun!`, "Ivan");
logger(`Learn C# and .NET. It's also really fun!`, "Bojan");

// RETURNING VALUES
// Remember the machine example. The machine can have an INPUT, but also an OUTPUT
function multiplyTwoNumbers(firstNumber, secondNumber) {
  // const result = firstNumber * secondNumber;
  // return result;
  // OR
  return firstNumber * secondNumber;
}

// PARAMETER MISMATCH
function calculateLoan(amount, months, interestRate, name) {
  const installment = (amount / months) * interestRate;
  return `Hello, ${name}. You need to pay $${installment.toFixed(
    2
  )} every month for ${months} months.`;
}

console.log(calculateLoan(10000, 12, 3.5, "Ivan"));
console.log(calculateLoan(10000, 12, 3.5, "Ivan", "Hello")); // JS will NOT complain. Extra arguments will be ignored.
console.log(calculateLoan(10000, 12, 3.5)); // JS will NOT complain. Missing arguments are undefined.

// DEFAULT PARAMETERS
function placeBet(firstTeam, secondTeam, bet = 1) {
  if (bet === 1) {
    return `Your bet says: ${firstTeam} will win against ${secondTeam}`;
  }
  if (bet === 2) {
    return `Your bet says: ${secondTeam} will win against ${firstTeam}`;
  }
  return `Your bet says the match between ${firstTeam} and ${secondTeam} will be tied.`;
}

// BUILT IN FUNCTIONS
const circleRadius = 5;
// Math.pow() is a built in function
const circleArea = Math.pow(circleRadius, 2) * Math.PI;

// VARIABLE SCOPE
// Where is the variable accessible from?
// Can be messy, AVOID using the same variable names in different scopes. It works, but it's confusing.
// The block of code of a function {} defines its scope. Everything defined in the function exists ONLY in that function body.
const VAT_RATE = 1.18;

function calculateProductWithVat() {
  const VAT_RATE = 1.05;
  /* 
  This is the scope of the function. The VAT_RATE variable created above is different from the one above.
  */

  const IBOR_RATE = 1.08;
  /* 
  The variable IBOR_RATE is created here, in the function. It is ONLY accessible here, in the function.
  */
  console.log("VAT RATE within the function", VAT_RATE);
}
calculateProductWithVat();
// console.log(IBOR_RATE); // This variable cannot be logged out. It doesn't exist. It hasn't been declared here. It's not even undefined.
console.log("VAT_RATE outside of the function", VAT_RATE);

// More examples with Scope

function calculateCircumference(radius = 1) {
  // This pi variable exists ONLY in this function. It CANNOT be accessed outside of this block {}
  const pi = Math.PI;
  return 2 * radius * pi;
}

// ALWAYS put the preset values last. Because when you add the arguments, you always go left to right.
function convertTemperature(temperature, type = "F2C") {
  if (!!temperature || !!type) {
    return "Function badly called. Needs more data!";
  }

  if (type === "F2C") {
    return Number(temperature) * 1.8 + 32;
  }
  return (5 / 9) * (Number(temperature) - 32);
}

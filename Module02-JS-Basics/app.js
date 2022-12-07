// Primitives don't have references. They copy the value.
let price = 199.99;
let pricePointer = price;
console.log(price);
console.log(pricePointer);
price = 200;
console.log(price);
console.log(pricePointer);

// STRING CONCATENATION

// Using the + operator

const firstName = "Ivan";
const lastName = "Lazarevski";

// This is a separate variable
const fullName = firstName + " " + lastName;

// Using string interpolation (template literals)
// Using backticks, it overcomes every issue
// RECOMMENDED

const fullNameInterpolated = `${firstName} ${lastName}`;

// NON VALUE TYPES

// Undefined means declared, but not initialized
let currentUser;

// NULL means declared, and initialized to have an empty value
currentUser = null;

// This is possible/doable
currentUser = undefined;

// NaN is the result of trying to do some math over a value that is not a number
const radius = 5;
const result = radius * "pi";
/* AVOID using math with non-number values EVEN if it works. It's bad practice,
because it's inconsistent and you don't know if it will break somewhere.
*/
console.log(result);
// Check if value is NaN
console.log(Number.isNaN(result)); // Returns true in this case

// INFINITE VALUES
const positiveInfinity = Infinity;
const negativeInfinity = -Infinity;

// LOGICAL OPERATORS (BOOLEAN LOGIC)
const carStatus = "open";
const carLongitude = 41.44;
const carLatitude = -32.12;

// Logical AND
const carOpenAndLocatedNorth = carStatus === "open" && carLatitude > 0;
console.log(`carOpenAndLocatedNorth: ${carOpenAndLocatedNorth}`);

// Logical OR
const carOpenOrLocatedWest = carStatus === "open" || carLatitude < 0;
console.log(`carOpenOrLocatedWest: ${carOpenOrLocatedWest}`);

// Logical NOT
const isCarNotOpen = carStatus !== "open";
console.log(`isCarNotOpen:`, isCarNotOpen);

const firstPlayerScore = 10;
const secondPlayerScore = 14;
const thirdPlayerScore = 17;
const fourthPlayerScore = 6;
// Expressions evaluate into values. Like a mathematical expression.
// 2 + 3 = 5 is an expression. It evaluates(results) in 5.
// clientAge > 30 is also an expression.
// The values involved in the operation of said expression are called operands.
const firstTeamWon =
  firstPlayerScore + secondPlayerScore > thirdPlayerScore + fourthPlayerScore;
console.log(`firstTeamWon: ${firstTeamWon}`);

// FALSY AND TRUTHY VALUES
// Don't try to remember them all, only remember that they exist.
// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
// Basically if it needs to be checked in an IF statement or similar
const petName = "";
const dogHasToy = true;
console.log(`Falsy empty string: `, petName && dogHasToy);

// You can convert falsy/truthy values to TRUE/FALSE
// You can use this to convert empty strings, undefined, null into true/false
// Makes it easy to check if something exists or not
const booleanPetName = !!petName;
console.log(`booleanPetName: `, booleanPetName);

// INEQUALITY
// Like before, avoid doing inequality with non-number values
const headphonePrice = 109.99;
const costMaximum = "150";
// Even if this works, AVOID it. Bad practice, hard to track.
console.log(headphonePrice < costMaximum);

const pushupsToday = 999;
const favoriteFood = "Pizza";
console.log("Is 999 greater than pizza", pushupsToday > favoriteFood); // Returns nonsense.
console.log("Is 999 less than pizza", pushupsToday < favoriteFood); // Returns nonsense.
console.log("Is 999 equal to pizza", pushupsToday === favoriteFood); // Returns nonsense.

// CONTROL STRUCTURES
const sugarAmount = 100;
if (sugarAmount) {
  console.log("Make a cake!");
} else {
  console.log("Be healthy!");
}

// You can have multiple conditions
const initialWage = 500;
const role = "Senior";

// This is very common in practice.
let calculatedBonus = 0;
if (role === "Senior") {
  calculatedBonus = initialWage * 1.8;
} else if (role === "Intermediate") {
  calculatedBonus = initialWage * 1.35;
} else {
  calculatedBonus = initialWage * 1.1;
}

console.log(`A ${role} makes ${calculatedBonus} every month.`);

// EXCERCISES
const clientFunds = Number(prompt("How much money do you have?"));
if (clientFunds <= 0) {
  console.log("Ooof.");
} else if (clientFunds <= 500) {
  console.log("You can afford a few drinks at a bar.");
} else if (clientFunds <= 2000) {
  console.log("You can afford a decent dinner.");
} else {
  console.log(`An expensive restaurant and the cinema sounds good.`);
}

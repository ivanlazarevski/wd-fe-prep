// EXAMPLE OBJECT
/* 
Objects are a common concept in programming.
 They are used to store multiple instances of data related to a single "thing"
For example, a person can have a name, email, and and address
 Instead of creating 3 separate variables that aren't logically related in the code
We can create a single object variable and assign those three properties so that
They always go together.
*/

const player = {
  name: "John",
  gamesOwned: 77,
  gamesCompleted: 12,
  favoriteGames: ["God of War", "Cyberpunk 2077", "Disco Elysium"],
  address: {
    street: "Castle St.",
    houseNumber: 13,
    city: "Skopje",
  },
};

// CREATING OBJECTS
// The literal way
const user = {
  username: "jondoe",
  email: "jondoe@gmail.com",
  premiumMembership: true,

  latestProducts: [
    {
      id: 1,
      productName: "Mug",
      price: 3.99,
    },
    {
      id: 2,
      productName: "Water Bottle",
      price: 0.99,
    },
  ],
};

// ACCESSING OBJECT PROPERTIES
// Using the . (dot) operator.
console.log("user", user);
console.log("premiumMembership", user.premiumMembership);
console.log("latest products", user.latestProducts);

// Using the square bracket operator
// Somewhat more error prone. Might have niche uses further down the line.
// Otherwise avoid it.
console.log("user email", user["email"]);

// CONSTRUCTOR NOTATION
const person = new Object();
person.firstName = "Ivan";
person.lastName = "Lazarevski";
person.hasPremium = true;
console.log("person", person);

// CONSTRUCTOR FUNCTION
// Can be used to generate objects

function VideoGame(title, genre, rating) {
  this.title = title;
  this.genre = genre;
  this.rating = rating;
}

// In a way, this lets us define the "type" of this object.
const favoriteGame = new VideoGame("Witcher 3", "RPG", 8);
const gameOfTheYear = new VideoGame("Elden Ring", "Soulslike", 10);
console.log(favoriteGame, gameOfTheYear);

// Just like any other function, surplus parameters are ignored.
const fightingGame = new VideoGame("Devil May Cry 5", "ARPG", 10, 12);
console.log(fightingGame);

// UPDATING OBJECTS

// You can fully delete a property.
/* Don't do this. Software relies on CONSISTENCY.
Completely deleting a property from some variables of a type
will break the application if you have some logic that somehow works with that
property in some other place.

If you want to remove a value from a property, 
set the value to either null or undefined instead.
*/
delete favoriteGame.genre;
console.log(favoriteGame);

// Changing a property value
gameOfTheYear.rating = 8;
console.log("gameOfTheYear.rating", gameOfTheYear.rating);

// Adding properties.
/* Similar to deleting properties, though somewhat harmless.
 It's better to make sure that all objects of similar type have
 the same properties. */
favoriteGame.genre = "Open World RPG";
console.log(favoriteGame);

// METHODS (FUNCTIONS AS PROPERTIES OF AN OBJECT)
/* 
A method is a function defined inside of a constructor function.
Generally, methods are called/invoked through an object created
with such constructor functions.
 */

function Trainer(firstName, lastName, academy, lecture) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.academy = academy;
  this.lecture = lecture;
  this.getFullInfo = function () {
    return `${this.firstName} ${this.lastName} from ${this.academy} is teaching ${this.lecture}.`;
  };
}

// Pay attention to the this keyword. It references the OBJECT itself
/* 
When we create a new Trainer with the firstName: 'Ivan',
for that object, the VALUE of this.firstName is "Ivan".

When we create a Trainer with the firstName: 'Bojan', 
for that object the value of this.firstName is 'Bojan'
*/

const sedcTrainer = new Trainer("Ivan", "Lazarevski", "SEDC", "Objects");
console.log(sedcTrainer.getFullInfo());
const backendTrainer = new Trainer(
  "Bojan",
  "Damchevski",
  "SEDC",
  "C# and .NET"
);
console.log(backendTrainer.getFullInfo());

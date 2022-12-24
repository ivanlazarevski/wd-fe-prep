const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Query Selectors
const appContainer = document.querySelector("#app");

// Event Listeners

// Function Declarations
function fetchPokemonData() {
  // This function will make an HTTP request to the Pokemon API

  fetch(BASE_URL)
    .then(function (response) {
      // The initial response is an unreadable format.
      return response.json();
    })
    .then(function (data) {
      // We take the data from the API and send it to a function that writes it on the screen.
      renderPokemonData(data.results);
    });
}

function renderPokemonData(dataArray) {
  // We create a new list object
  const list = document.createElement("ul");
  // We add a class to the list
  list.classList = "pokemon-list";

  // We create a new <li> for EACH element in the pokemon array.
  // We are setting the ID of every <li> so that we can target it with clicking events.
  for (const pokemon of dataArray) {
    list.innerHTML += `
        <li id=poke-${pokemon.name} class="pokemon-list__item">
            ${pokemon.name}
        </li>
        `;
  }
  appContainer.appendChild(list);
  // We are capturing ALL <li> in an array
  const listItems = document.querySelectorAll(".pokemon-list__item");

  // We can then add an event listener to EVERY item in that array (Remember, they are HTML elements)
  for (const item of listItems) {
    item.addEventListener("click", function (event) {
      // We obtain the pokemon name from the ID of the <li>
      const elementId = event.target.id;
      const pokemonName = elementId.split("-")[1];
      // Whenever we click on any of the <li>, we wish to call a function that makes and HTTP call for a single pokemon
      fetchSinglePokemon(`${BASE_URL}/${pokemonName}`);
    });
  }
}

function fetchSinglePokemon(url) {
  // This function will make a HTTP request to get a single pokemon
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      //   console.log(data.species.name);
      //   console.log(data.sprites.front_default);

      // Since we only want to display an image and the name, we will only send those two pieces of information
      // in a new function that will draw the pokemon information on the screen
      const pokemonName = data.species.name;
      const pokemonImage = data.sprites.front_default;

      renderSinlePokemon({ pokemonName, pokemonImage });
    });
}

function renderSinlePokemon(data) {
  // We create a new div, and we give it a class of pokemon-card
  let pokemonCard = document.createElement("div");
  pokemonCard.classList = "pokemon-card";
  // We setup the innerHMTL of that div
  pokemonCard.innerHTML = `
  <img class="pokemon-card__img" src="${data.pokemonImage}" alt="${data.pokemonName}">
  <h2 class="pokemon-card__title">${data.pokemonName}</h2>
  `;
  pokemonCard.addEventListener("click", function () {
    // We can add an event listener to the card so that when we click on the card,
    // the card disappears and we render the list again
    appContainer.innerHTML = "";
    fetchPokemonData();
  });
  // We reset the HTML, and we draw the card instead of the list
  appContainer.innerHTML = "";
  appContainer.appendChild(pokemonCard);
}

function init() {
  fetchPokemonData();
}

// App Start
// It's good to have an init function that sets up everything.
init();

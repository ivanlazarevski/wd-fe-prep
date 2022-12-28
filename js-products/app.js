// 1. Create a function that makes an HTTP request to the Fake Store API.

// Bonus: Make the function use async/await, and return the result.
// (REMEMBER: An async function always returns the result wrapped in a promise!)
// (REMEMBER 2: Await can ONLY be used within an async function!)
// With this, you can store the result in a global variable.

// 2. Create a function that renders the results returned by the HTTP request function.
// It needs to render a <ul> with an <li> for each product that holds the title.

// 3. Create a function that calculates the sum of all products and renders it on the screen.

// 4. Create a function that finds the highest rated product.

// BONUS:
// 5. Add a click event listener to each <li>. When that <li> is clicked, it should make a call for a single product
// using it's ID and render the title, price, description and image of the product.

// 6. Add a button that cleans up the DOM and re-renders the list of products

// 7. Add a search functionality. It should take the ID of a product from the input and use the functions from requirement #5 to render a single product.

const BASE_URL = "https://fakestoreapi.com/products";
let productArray = [];

// Query Selectors
const appContainer = document.querySelector("#app-container");

// Functions
async function getAllProducts() {
  const response = await fetch(BASE_URL);
  const result = await response.json();
  return result;
}

function renderAllProducts(products) {
  const productList = document.createElement("ul");
  productList.classList.add("product-list");

  for (const product of products) {
    productList.innerHTML += `
    <li class="product-item">
        <h3 class="card-title">${product.title}</h3>
        <h4 class="card-subtitle">${product.price}</h4>
        <button id=${product.id}>Read More</button>
    </li>
    `;
  }
  appContainer.appendChild(productList);

  // Add Event Listeners
  const listItems = document.querySelectorAll(".product-item");
  for (const item of listItems) {
    const btn = item.lastElementChild;
    btn.addEventListener("click", async function (event) {
      const id = event.target.id;
      const product = await getSingleProduct(id);
      renderProduct(product);
    });
  }
}

function calculateTotalPrice(products) {
  let total = 0;
  for (const product of products) {
    total += product.price;
  }
  total = total.toFixed(2);
  const priceContainer = document.createElement("p");
  priceContainer.innerHTML = `Total Price: $${total}`;
  appContainer.appendChild(priceContainer);
}

async function getSingleProduct(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  const result = await response.json();
  return result;
}

function renderProduct(product) {
  const productContainer = document.createElement("div");
  productContainer.classList.add("product");
  productContainer.innerHTML = `
  <h3 class="product-title">${product.title}</h3>
  <h4 class="product-subtitle">${product.price}</h4>
  <img src="${product.image}" alt="" class="product-image">
  <p class="product-description">${product.description}</p>
  `;
  appContainer.innerHTML = "";
  appContainer.appendChild(productContainer);
}

function getHighestRatedProduct(products) {
  let highest = products[0];
  for (let index = 0; index < products.length; index++) {
    if (products[index].rating.rate > highest.rating.rate) {
      highest = products[index];
    }
  }
  console.log(highest);
}

async function init() {
  productArray = await getAllProducts();
  renderAllProducts(productArray);
  calculateTotalPrice(productArray);
  getHighestRatedProduct(productArray);
}

// App Init
init();

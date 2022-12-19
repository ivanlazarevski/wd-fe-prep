// ====================== */
/* [[DOM EVENT HANDLERS]] */
// ====================== */
// elementName.on[event_name] = functionName
// FUNCTION DECLARATION
function navigateToArticle() {
  window.location.href =
    "https://sport1.mk/fudbal/svet/enco-fernandez-najsrekjen-sum-za-mesi-nikoj-povekje-od-nego-ne-go-zasluzhi-ova";
}

// ELEMENT SELECTOR
const articleBtn = document.querySelector("#article-btn");

// ELEMENT LISTENER ATTACHMENT
// Don't use the () here. It will execute the function on load.
// We only need to give the element a reference to the function.
articleBtn.onclick = navigateToArticle;

// Most developers don't like this method, but it's clean and it works.

// If you don't need to add more than one event listener to the element,
// .on[event_name] is good enough.
// Frameworks such as react and Angular use .addEventListener() in the background

// DOM EVENT HANDLERS EXAMPLE #2

function printComment(event) {
  // console.log(event);
  // console.log(event.target.value);
  const val = event.target.value;
  commentBox.innerHTML = val;
}

const commentArea = document.querySelector("#commentArea");
const commentBox = document.querySelector(".comment-box");

commentArea.oninput = printComment;

// ====================== */
/* [[ADD EVENT LISTENER]] */
// ====================== */

function registerUser(event) {
  event.preventDefault();
  const userEmail = registerForm.elements[0].value;
  const userPassword = registerForm.elements[1].value;
  //   alert(`You entered ${userEmail} / ${userPassword}`);
  console.log(userEmail, userPassword);
  registerForm.reset();

  // REMOVE EVENT LISTENER
  // Rarely used, if ever.
  registerForm.removeEventListener("submit", registerUser);
}

const registerForm = document.querySelector("#register-form");
registerForm.addEventListener("submit", registerUser);
// console.log(registerForm.elements);

// ADD EVENT LISTENER EXAMPLE #2
// Anonymous functions
const registerBtn = document.querySelector("#register-btn");

registerBtn.addEventListener("mouseenter", function (event) {
  registerBtn.innerHTML = `Welcome!`;
});

registerBtn.addEventListener("mouseleave", function (event) {
  registerBtn.innerHTML = `Register`;
});



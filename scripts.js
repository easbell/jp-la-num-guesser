//NAME INPUT VARIABLES
var chal1Input = document.getElementById("js-chal1");
var chal2Input = document.getElementById("js-chal2");

//UPDATED NAME VARIABLES
var chal1Update = document.querySelectorAll(".js-updateChal1");
var chal2Update = document.querySelectorAll(".js-updateChal2");

// GUESS INPUT VARIABLES
var guess1 = document.querySelector(".js-guess-1");
var guess2 = document.querySelector(".js-guess-2");

//UPDATED GUESS VARIABLES
var largeGuess1 = document.getElementById("js-newguess-1");
var largeGuess2 = document.getElementById("js-newguess-2");

// SUBMIT BUTTON VARIABLE
var getSubmit = document.querySelector("#js-submit");

//*******************************************************
//*****min-max input field, changing the DOM*************

//UPDATE FIELDS VARIABLES
var minInput = document.querySelector("#js-min-input");
var maxInput = document.querySelector("#js-max-input");

//ADJUSTABLE TEXT TO SHOW RANGE VARIABLES
var minUpdate = document.getElementById("js-min-update");
var maxUpdate = document.getElementById("js-max-update");

// CLEAR BUTTON VARIABLE
var clearButton = document.querySelector("#js-clear");

//UPDATE BUTTON VARIABLE
var getUpdate = document.querySelector("#js-update");

/////////////////////////////////////////////////////////////

// Event Listeners 
getSubmit.addEventListener('click', submitClick);

getUpdate.addEventListener('click', updateRng);

clearButton.addEventListener('click', clearFields);


/////////////////////////////////////////////////////////////
// !!!!!!!! I TOOK THIS OUT AND ADDED THE PREVENT DEFAULT TO 
//FUNCTION BELOW !!!!!!!!

// function updateClick(e){
//   e.preventDefault();
//   console.log("in update rng");
//   updateRng();
// }

function updateRng(e){
  e.preventDefault();
  minUpdate.innerText = minInput.value;
  maxUpdate.innerText = maxInput.value;
}

// ******************************************************
// Don't need for loops
// create the variables in a global scope
// Research Parseinit
// ******************************************************

// SUBMIT FUNCTION TO RUN THE TWO BELOW
function submitClick(e){
  e.preventDefault();
  console.log("in submit");
  updateGuesses();
  update();
}

//UPDATE GUESSES IN CARDS
function updateGuesses() {
  largeGuess1.innerText = guess1.value;
  largeGuess2.innerText = guess2.value;
}

// UPDATE NAMES
function update() {
  for (var i = 0; i < chal2Update.length; i++) {
    chal2Update[i].innerText = chal2Input.value;
  }
  for (var i = 0; i < chal1Update.length; i++) {
    chal1Update[i].innerText = chal1Input.value;
  }
}

// CLEAR GUESS INPUT
function clearFields(e) {
  e.preventDefault();
  document.getElementById("js-clear-input1").value = "";
  document.getElementById("js-clear-input2").value = "";
}





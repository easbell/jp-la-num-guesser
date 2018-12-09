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

//ERROR MESSAGE VARIABLE
var error = document.querySelector(".error-hidden");

// RANDOM NUM VARIABLE
var numGenerated

//UPDATE FIELDS VARIABLES
// var min = parseInt(minInput.value);
// ???Why does this break the code????
// var max = parseInt(maxInput.value);
var minInput = document.querySelector("#js-min-input");
var maxInput = document.querySelector("#js-max-input");

//ADJUSTABLE TEXT TO SHOW RANGE VARIABLES
var minUpdate = document.getElementById("js-min-update");
var maxUpdate = document.getElementById("js-max-update");

// BUTTON VARIABLES
var clearButton = document.querySelector("#js-clear");
var getUpdate = document.querySelector("#js-update");
var resetButton = document.querySelector("#js-reset");
var getSubmit = document.querySelector("#js-submit");

//DOM manipulation for lowHigh text
var lowHigh1 = document.querySelector(".js-low-high1");
var lowHigh2 = document.querySelector(".js-low-high2");

/////////////////////////////////////////////////////////////

//********************************************************
//Justin Working on: Form Validation
//********************************************************
function validateRng(){
	if (parseInt(minInput.value) > parseInt(maxInput.value)){
			alert("Please choose a value lower than your Max!!");
	} 
}

function validateGuess(){
	if (parseInt(guess1.value) <= parseInt(minInput.value) || parseInt(guess1.value) >= parseInt(maxInput.value)){
		alert("Please choose a value within the Range!!")
	} else if (parseInt(guess2.value) <= parseInt(minInput.value) || parseInt(guess2.value) >= parseInt(maxInput.value)){
		alert("Please choose a value within the Range!!")
	}
}
//********************************************************

//***************Event Listeners****************** 
getSubmit.addEventListener('click', submitClick);

getUpdate.addEventListener('click', updateRng);

clearButton.addEventListener('click', clearFields);

resetButton.addEventListener('click', resetGame);

guess1.addEventListener('keyup', areFieldsEmpty);

//////////////////////////////////////////////////////////

//***************FUNCTIONS************************

//RANDOM NUM GENERATOR
function updateRng(e){
  e.preventDefault();
  minUpdate.innerText = minInput.value;
  maxUpdate.innerText = maxInput.value;
  validateRng();
  min = parseInt(minInput.value) || 1;
  max = parseInt(maxInput.value) || 100;
  numGenerated = Math.floor(Math.random() * (max - min + 1))  + min;
}

// SUBMIT BUTTON FUNCTION
function submitClick(e){
  e.preventDefault();
  updateGuesses();
  update();
  validateGuess();
  player1Win();
  player2Win();
  noInputGiven();
  resetButton.disabled = false;
}

//ERROR MESSAGE IF FIELD IS BLANK
function noInputGiven() {
  console.log(error);
  if (!chal1Input.value) {
    chal1Input.classList.add("empty");
    error.classList.remove("error-hidden");
    error.classList.add("error-shown");
  } else if (chal1Input.value) {
    chal1Input.classList.remove("empty");
    error.classList.remove("error-shown");
    error.classList.add("error-hidden");
  }
}

// function noInputGiven2() {
//   console.log(error);
//   if (!chal2Input.value) {
//     chal2Input.classList.add("empty");
//     error.classList.remove("error-hidden");
//     error.classList.add("error-shown");
//   } else if (chal2Input.value) {
//     chal2Input.classList.remove("empty");
//     error.classList.remove("error-shown");
//     error.classList.add("error-hidden");
//   }
// }

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

// Functions to declare Winner
function player1Win() {
 if (guess1.value > numGenerated){
 	lowHigh1.innerText = "that's too high";
 } else if (guess1.value < numGenerated){
 	lowHigh1.innerText = "that's too low";
 } else {
 	lowHigh1.innerText = "Winner"
 }
}
function player2Win(){
 if (guess2.value > numGenerated){
 	lowHigh2.innerText = "that's too high";
 } else if (guess2.value < numGenerated){
 	lowHigh2.innerText = "that's too low";
 } else {
 	lowHigh2.innerText = "Winner";
 }
}

//RESET LARGE GUESS
function resetLargeNum() {
  largeGuess1.innerText = "#";
  largeGuess2.innerText = "#";
}

//CLEAR GUESS INPUT FIELDS
function clearGuessInput() {
  document.getElementById("js-clear-input1").value = "";
  document.getElementById("js-clear-input2").value = "";
}

//CLEAR NAME INPUT FIELDS
function clearNameInput() {
  document.getElementById("js-chal1").value = "";
  document.getElementById("js-chal2").value = "";
}

// CLEAR GUESS INPUT
function clearFields(e) {
  e.preventDefault();
  clearGuessInput();
  resetLargeNum();
} 

//RESET GAME (CLEAR FIELDS AND GEN NEW NUMBER)
function resetGame(e) {
  e.preventDefault();
  clearGuessInput();
  clearNameInput();
  minUpdate.innerText = minInput.value;
  maxUpdate.innerText = maxInput.value;
  min = parseInt(minInput.value) || 1;
  max = parseInt(maxInput.value) || 100;
  numGenerated = Math.floor(Math.random() * (max - min + 1))  + min;
  resetLargeNum();
} 


//ARE FIELDS EMPTY? ONLY WORKS FOR FIRST GUESS FIELD.
//IMPLEMENT FOR LOOP TO TARGET SECOND AS WELL?
function areFieldsEmpty(e) {
  e.preventDefault();
  clearButton.disabled = false;
}


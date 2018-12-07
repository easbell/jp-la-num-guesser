// var chal1 = document.querySelector('.js-chal1').value;
  var chal1Input = document.getElementById("js-chal1");
  var chal2Input = document.getElementById("js-chal2");
  //
  var chal1Update = document.querySelectorAll(".js-updateChal1");
  var chal2Update = document.querySelectorAll(".js-updatechal2");

//*******************************************************
//*****min-max input field, changing the DOM*************
var minInput = document.getElementById("js-min-input");
var maxInput = document.getElementById("js-max-input");

var minUpdate = document.querySelectorAll("js-min-update");
var maxUpdate = document.getElementById("js-max-update");

function update (e){
  e.preventDefault();
    var maxUpdate = parseInt(Math.random) || 1;
    var minUpdate = parseInt(Math.random) || 100;
}

var getUpdate = document.querySelector("#js-update");
getUpdate.addEventListener('click', update);
// ******************************************************
// Don't need for loops
// create the variables in a global scope
// Research Parseinit
// ******************************************************

function clearFields(e) {
  e.preventDefault();
  document.getElementById("js-clear-input1").value = "";
  document.getElementById("js-clear-input2").value = "";
}

var clearButton = document.querySelector("#js-clear");
clearButton.addEventListener('click', clearFields);

// function updateChal1(e){
//   e.preventDefault();
//   var chal1Input = document.getElementById("js-chal1").value;
//   var chal1Update = document.querySelectorAll(".js-updateChal1");
//   for (var i = 0; i < chal1Update.length; i++) {
//     chal1Update[i].innerText = chal1Input;
//   }
// }

// function updateChal2(e){
//   e.preventDefault();
//   var chal2Input = document.getElementById("js-chal2").value;
//   var chal2Update = document.querySelectorAll(".js-updateChal2");
//   for (var i = 0; i < chal2Update.length; i++) {
//     chal2Update[i].innerText = chal2Input;
//   }
// }

function submit(e) {
  e.preventDefault();
  var chal2Input = document.getElementById("js-chal2").value;
  var chal2Update = document.querySelectorAll(".js-updateChal2");
  for (var i = 0; i < chal2Update.length; i++) {
    chal2Update[i].innerText = chal2Input;
  }
  var chal1Input = document.getElementById("js-chal1").value;
  var chal1Update = document.querySelectorAll(".js-updateChal1");
  for (var i = 0; i < chal1Update.length; i++) {
    chal1Update[i].innerText = chal1Input;
  }
}


var getSubmit = document.querySelector("#js-submit");
getSubmit.addEventListener('click', submit);
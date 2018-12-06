// var chal1 = document.querySelector('.js-chal1').value;
  var chal1Input = document.getElementById("js-chal1");
  var chal1Update = document.querySelectorAll(".js-updateChal1");

function clearFields() {
  document.getElementById("js-clear-input1").value = "";
  document.getElementById("js-clear-input2").value = "";
}

function updateChal1(){
  for (var i = 0; i < chal1Update.length; i++) {
    chal1Update[i].innerText = chal1Input.value;
  }
}

var getSubmit = document.querySelector("#js-submit");

getSubmit.addEventListener('click', updateChal1);
window.onload = function () {
  inputValue();
};
function inputValue() {
  let inputs = document.querySelectorAll(".inp");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", updateInput);
  }
}
function updateInput(event) {
  if (parseInt(event.target.value) >= 0 && parseInt(event.target.value) < 256) {
    let red = document.querySelector("#inpRed");
    let green = document.querySelector("#inpGreen");
    let blue = document.querySelector("#inpBlue");
    document.querySelector(
      ".background-color"
    ).style.background = `rgb( ${red.value},${green.value},${blue.value})`;
  } else {
    alert("Исправьте значение: " + event.target.value);
    event.target.value = "";
  }
}

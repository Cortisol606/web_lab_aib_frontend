window.onload = function () {
  // inputValue();
  let btn = document.querySelector(".btn");
  btn.addEventListener("click", btnClick);
  slider();
  // document.addEventListener("click", function (e) {
  //   console.log(e.target.classList);
  //   if (
  //     e.target.classList != "container_top" &&
  //     e.target.classList != "container_bottom" &&
  //     e.target.classList != "background-color" &&
  //     e.target.classList != "btn" &&
  //     e.target.classList != "inp"
  //     // e.target.classList != ""
  //   )
  //     e.target.style.background = localStorage.getItem("color");
  // });
};
let blocks = 0;
let count = 0;
let counter = 0;

function inputsValue() {
  let inputs = document.querySelectorAll(".inp");
  let start = false;
  for (let i = 0; i < inputs.length; i++) {
    if (parseInt(inputs[i].value) >= 0 && parseInt(inputs[i].value) < 256) {
      start = true;
    } else {
      start = false;
    }
  }
  if (start) {
    updateInput();
  } else {
    alert("Введите корректные значения!");
  }
}
function updateInput() {
  let red = document.querySelector("#inpRed");
  let green = document.querySelector("#inpGreen");
  let blue = document.querySelector("#inpBlue");
  let wrapBot = document.querySelector(".wrapper_bottom");
  let contBot = document.querySelector(".container_bottom");
  let block = document.createElement("div");
  document.querySelector(
    ".background-color"
  ).style.background = `rgb( ${red.value},${green.value},${blue.value})`;

  block.classList.add("block");
  block.style.background = `rgb( ${red.value},${green.value},${blue.value})`;
  wrapBot.prepend(block);
  count++;
  counter++;
  if (count > 5) {
    count = 5;
  }
  console.log(block.offsetWidth);
  console.log((count - 1) * 20);
  let width = block.offsetWidth * count + 10 * (count - 1);
  contBot.style.width = width + "px";
  console.log("COunter" + counter);
  // if (counter >= 15) {
  //   console.log("Height" + block.offsetWidth * 3);
  //   contBot.style.height = block.offsetWidth * 3 + 10 * 2 + "px";
  // }
  blocks = document.querySelectorAll(".block");
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].removeEventListener("click", handleBlockClick);
  }
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click", function () {
      console.log(blocks[i].style.background);
      localStorage.setItem("color", blocks[i].style.background);
    });
  }
  console.log(width);
  slider();
}
function btnClick(event) {
  event.preventDefault();
  console.log("click");
  inputsValue();
}
function handleBlockClick(block) {
  console.log(block.style.background);
  // localStorage.setItem("color", )
}

function slider() {
  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");
  let wrapBlock = document.querySelector(".wrapper_bottom");
  let blockWidth = document.querySelector(".block").offsetWidth;

  let counter = 0;
  next.addEventListener("click", () => {
    next.style.display = "block";
    if (counter < document.querySelectorAll(".block").length - 1) {
      counter++;
      wrapBlock.style.transform = `translateX(${-(
        blockWidth * counter +
        counter * 10
      )}px)`;
    } else {
      next.style.display = "none";
      prev.style.display = "block";
    }
  });

  prev.addEventListener("click", () => {
    prev.style.display = "block";
    if (counter > 0) {
      counter--;
      wrapBlock.style.transform = `translateX(${-(
        blockWidth * counter +
        counter * 10
      )}px)`;
    } else {
      prev.style.display = "none";
      next.style.display = "block";
    }
  });
}

slider();

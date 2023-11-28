"use strict";
import { displayGrid } from "./helpers";
const app = document.querySelector("#app");
const colorBtn = document.querySelector("#colorBtn");
const colorModeBtn = document.querySelector("#colorModeBtn");
const rainbowModeBtn = document.querySelector("#rainbowModeBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const clearBtn = document.querySelector("#clearBtn");
const numberRange = document.querySelector(".numberRange");

const textButtons = [colorModeBtn, rainbowModeBtn, eraserBtn, clearBtn];
const buttons = [colorBtn, ...textButtons];

buttons.forEach((button) => {
  button.addEventListener("mouseover", function () {
    button.classList.add("hover");
  });
});

buttons.forEach((button) =>
  button.addEventListener("mouseleave", function () {
    button.classList.remove("hover");
  })
);

function toggleClass(clickedButton) {
  textButtons.forEach((btn) => {
    if (btn.id === clickedButton) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}

textButtons.forEach((txtBtn) => {
  txtBtn.addEventListener('click', function(){
    toggleClass(txtBtn.id)
  })
});

displayGrid(app, 8);



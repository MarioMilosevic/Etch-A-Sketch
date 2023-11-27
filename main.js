"use strict";
import { displayGrid } from "./helpers";
const app = document.querySelector("#app");
const circleBtn = document.querySelector("#circleBtn");
const colorModeBtn = document.querySelector("#colorModeBtn");
const rainbowModeBtn = document.querySelector("#rainbowModeBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const clearBtn = document.querySelector("#clearBtn");
const numberRange = document.querySelector(".numberRange");

const buttons = [circleBtn, colorModeBtn, rainbowModeBtn, eraserBtn, clearBtn];

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

displayGrid(app, 8);

"use strict";
import { displayGrid } from "./helpers";
import { init } from "./constants";
const {
  app,
  colorBtn,
  colorModeBtn,
  rainbowModeBtn,
  eraserBtn,
  clearBtn,
  numberRange,
  textButtons,
  buttons,
} = init();
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
  txtBtn.addEventListener("click", function () {
    toggleClass(txtBtn.id);
  });
});

displayGrid(app, 8);

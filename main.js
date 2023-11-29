"use strict";
import { displayGrid } from "./helpers";
import { init } from "./constants";
import { fillDivs } from "./helpers";
import { randomColor } from "./helpers";
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
  appChildren,
  inputRange,
} = init();

displayGrid(app, 4);

const childrenArr = [...appChildren];

colorBtn.addEventListener("input", function () {
  childrenArr.forEach((child) => fillDivs(child, `${colorBtn.value}`));
  textButtons.forEach((btn) => {
    btn.classList.remove("selected");
  });
  colorModeBtn.classList.add("selected");
});

colorModeBtn.addEventListener("click", function () {
  childrenArr.forEach((child) => fillDivs(child, `${colorBtn.value}`));
});

rainbowModeBtn.addEventListener("click", function () {
  childrenArr.forEach((child) => fillDivs(child, `${randomColor()}`));
});

eraserBtn.addEventListener("click", function () {
  childrenArr.forEach((child) => fillDivs(child, "#FFFFFF"));
});

clearBtn.addEventListener("click", function () {
  childrenArr.forEach((child) => {
    child.removeEventListener("mouseover", fillDivs);
    child.style.backgroundColor = "#fff";
  });
});

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

inputRange.addEventListener("input", function (event) {
  numberRange.textContent = `${event.target.value} X ${event.target.value}`;
  app.textContent = "";
  displayGrid(app, event.target.value);
});

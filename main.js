"use strict";
import { displayGrid } from "./helpers";
import { init } from "./constants";
import { fillDivs } from "./helpers";
import { rainbowColor } from "./helpers";
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
} = init();

displayGrid(app, 8);

const childrenArr = [...appChildren];

colorBtn.addEventListener("change", function () {
  childrenArr.forEach((child) => fillDivs(child, `${colorBtn.value}`));
});

colorModeBtn.addEventListener("click", function () {
  childrenArr.forEach((child) => fillDivs(child, `${colorBtn.value}`));
});

rainbowModeBtn.addEventListener("click", function () {
  childrenArr.forEach((child) => fillDivs(child, `${rainbowColor()}`));
});

eraserBtn.addEventListener("click", function () {
  childrenArr.forEach((child) => fillDivs(child, "white"));
});

clearBtn.addEventListener('click', function(){
  childrenArr.forEach(child => {
    child.removeEventListener('mouseover', fillDivs)
    child.style.backgroundColor = "#fff"
  })
})

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

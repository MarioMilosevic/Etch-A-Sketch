"use strict";
import { displayGrid } from "./helpers";
import { init } from "./constants";
import { fillDivs } from "./helpers";
import { randomColor } from "./helpers";
import { fillAray } from "./helpers";

const {
  app,
  colorBtn,
  colorModeBtn,
  randomModeBtn,
  eraserBtn,
  clearBtn,
  numberRange,
  textButtons,
  buttons,
  appChildren,
  inputRange,
  classButtons,
  span
} = init();
displayGrid(app, 4);

// App children se napuni (HTML kolekcija) nakon pozivanja displayGrida pa popunim array sa tim elementima

let childrenArr = [...appChildren];


colorBtn.addEventListener("input", function () {
  childrenArr.forEach((child) => fillDivs(child, `${colorBtn.value}`));
  textButtons.forEach((btn) => {
    btn.classList.remove("selected");
  });
  span.style.color = `${colorBtn.value}`
  colorModeBtn.classList.add("selected");
});


colorModeBtn.addEventListener("click", function () {
  childrenArr.forEach((child) => fillDivs(child, `${colorBtn.value}`));
});

randomModeBtn.addEventListener("click", function () {
  childrenArr.forEach((child) => fillDivs(child, `${randomColor()}`));
});

eraserBtn.addEventListener("click", function () {
  childrenArr.forEach((child) => fillDivs(child, "#FFFFFF"));
});

// clearBtn.addEventListener("click", function () {
//   childrenArr.forEach((child) => {
//     child.removeEventListener("mouseover", fillDivs);
//     child.style.backgroundColor = "#fff";
//   });
// });

const colorBtnClass = (arr, btn) => {
  arr.forEach((el) => {
    el.classList.remove("selected");
  });
  btn.classList.add("selected");
} 

clearBtn.addEventListener("click", function () {
  app.textContent = "";
  colorBtnClass(classButtons, colorModeBtn)
  displayGrid(app, inputRange.value);
  childrenArr = [...appChildren]
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

classButtons.forEach((classBtn) => {
  classBtn.addEventListener("click", function () {
    toggleClass(classBtn.id);
  });
});

inputRange.addEventListener("input", function (event) {
  numberRange.textContent = `${event.target.value} X ${event.target.value}`;
  app.textContent = ""
  console.log(event.target.value);
  displayGrid(app, event.target.value);
  // cu provjerit opet array !== arr
  // fillAray(appChildren, childrenArr)
  childrenArr = [...appChildren]
  colorBtnClass(classButtons, colorModeBtn)
});

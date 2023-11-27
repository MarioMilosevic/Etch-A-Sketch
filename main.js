"use strict";
const root = document.querySelector("#app");

const displayGrid = (n) => {
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    root.appendChild(div);
    fillGrid(div, n);
  }
};

const fillGrid = (element, n) => {
  element.style.gridTemplate = `repeat(${n},1fr) / repeat(${n},1fr)`
  element.style.backgroundColor = "#fff";
  element.style.border = '1px solid black'
};

displayGrid(5);

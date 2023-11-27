"use strict";
const root = document.querySelector("#app");

const displayGrid = (n) => {
  for (let i = 0; i < n*n; i++) {
    const div = document.createElement("div");
    root.appendChild(div);
    fillGrid(div, n);
  }
};

const fillGrid = (element, n) => {
  root.style.gridTemplate = `repeat(${n},${n}fr) / repeat(${n}, ${n}fr)`
  // root.style.gridTemplateColumns = `repeat(${n},1fr)`;
  // root.style.gridTemplateRows = `repeat(${n},1fr)`;
  element.style.border = '1px solid black'
  element.style.backgroundColor = "#fff";
};

displayGrid(20);

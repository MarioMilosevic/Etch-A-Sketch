export const displayGrid = (root, n) => {
  for (let i = 0; i < n * n; i++) {
    const div = document.createElement("div");
    root.appendChild(div);
    fillGrid(root, div, n);
  }
};

export const chooseColor = (el, color, arr) => {
  el.addEventListener("click", function () {
    arr.forEach((child) => fillDivs(child, color));
  });
};
const fillGrid = (main, divs, n) => {
  main.style.gridTemplate = `repeat(${n},1fr) / repeat(${n}, 1fr)`;
  divs.style.border = "1px solid black";
  fillDivs(divs, "#FF0000");
};

export const fillDivs = (element, color) => {
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = color;
  });
};

export const randomColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  return randomColor;
};

export const buttonListeners = (arr, color) => {
  arr.forEach((el) => fillDivs(el, color));
  };




export const displayGrid = (root, n) => {
  for (let i = 0; i < n * n; i++) {
    const div = document.createElement("div");
    root.appendChild(div);
    fillGrid(root, div, n);
  }
};

const fillGrid = (main, divs, n) => {
  main.style.gridTemplate = `repeat(${n},1fr) / repeat(${n}, 1fr)`;
  divs.style.border = "1px solid black";
  fillDivs(divs, '#FF0000')
};

export const fillDivs = (element, color) => {
    element.addEventListener("mouseover", function () {
        console.log("nesto");
        element.style.backgroundColor = color
      });
}

export const rainbowColor = () => {
  let red = Math.floor(Math.random() *256)
  let green = Math.floor(Math.random() *256)
  let blue = Math.floor(Math.random() *256)
  const rainbowColor = `rgb(${red}, ${green}, ${blue})`
  return rainbowColor
}
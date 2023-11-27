export const displayGrid = (root, n) => {
  for (let i = 0; i < n * n; i++) {
    const div = document.createElement("div");
    root.appendChild(div);
    fillGrid(root, div, n);
  }
};

export const fillGrid = (main, divs, n) => {
  main.style.gridTemplate = `repeat(${n},1fr) / repeat(${n}, 1fr)`;
  divs.style.border = "1px solid black";
  divs.style.backgroundColor = "#fff";
};

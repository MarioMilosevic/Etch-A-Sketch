export const displayGrid = (root, n) => {
  for (let i = 0; i < n * n; i++) {
    const div = document.createElement("div");
    root.appendChild(div);
    fillGrid(root, div, n);
    div.addEventListener("mouseover", function () {
      console.log("nesto");
      div.style.backgroundColor = 'red'
    });
  }
};

const fillGrid = (main, divs, n) => {
  main.style.gridTemplate = `repeat(${n},1fr) / repeat(${n}, 1fr)`;
  divs.style.border = "1px solid black";
  //   divs.style.backgroundColor = "#fff";
};

const fillDivs = () => {
    
}
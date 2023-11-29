const buttonListeners = (arr, color) => {
    arr.forEach((el) => fillDivs(el, color));
    };

    buttonListeners(childrenArr, '#FFFFFF')
    buttonListeners(childrenArr, `${randomColor()}`)

  colorBtn.addEventListener("input", function () {
    childrenArr.forEach((child) => fillDivs(child, `${colorBtn.value}`));
    textButtons.forEach((btn) => {
      btn.classList.remove("selected");
    });
    
  });

  childrenArr.forEach((child) => fillDivs(child, "#FFFFFF"));
  childrenArr.forEach((child) => fillDivs(child, `${randomColor()}`));

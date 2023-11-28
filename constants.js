export function init(){

    const app = document.querySelector("#app");
    const colorBtn = document.querySelector("#colorBtn");
    const colorModeBtn = document.querySelector("#colorModeBtn");
    const rainbowModeBtn = document.querySelector("#rainbowModeBtn");
    const eraserBtn = document.querySelector("#eraserBtn");
    const clearBtn = document.querySelector("#clearBtn");
    const numberRange = document.querySelector(".numberRange");
    const textButtons = [colorModeBtn, rainbowModeBtn, eraserBtn, clearBtn];
    const buttons = [colorBtn, ...textButtons];
    return {app, colorBtn, colorModeBtn, rainbowModeBtn, eraserBtn, clearBtn, numberRange, textButtons, buttons}
} 
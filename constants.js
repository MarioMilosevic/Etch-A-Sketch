import { randomColor } from "./helpers";

export function init(){
    const app = document.querySelector("#app");
    const colorBtn = document.querySelector("#colorBtn");
    const colorModeBtn = document.querySelector("#colorModeBtn");
    const randomModeBtn = document.querySelector("#randomModeBtn");
    const eraserBtn = document.querySelector("#eraserBtn");
    const clearBtn = document.querySelector("#clearBtn");
    const inputRange = document.querySelector('.inputRange')
    const inputRangeValue = inputRange.value
    const numberRange = document.querySelector(".numberRange");
    const span = document.querySelector('.span')
    const appChildren = app.children
    const childrenArr = [...appChildren]
    const classButtons = [colorModeBtn,randomModeBtn, eraserBtn ]
    const textButtons = [colorModeBtn, randomModeBtn, eraserBtn, clearBtn];
    const buttons = [colorBtn, ...textButtons];
    return {app, colorBtn, colorModeBtn, randomModeBtn, eraserBtn, clearBtn, numberRange, textButtons, buttons, appChildren, inputRange, inputRangeValue, childrenArr, classButtons, span}
} 

// Random mode da se non stop pune boje
// umjesto mouseovera, da stavimo mousehold ...probamo
import { changeMainStyle, changeMainStyleLink } from './btnhamburger.js';
import { startRelog, stopRelog, startAlarm, stopAlarm } from './relog-digital.js';
import { startKeyBoard } from './keyBoard.js';

export const btn = document.getElementById("btn");
export const list = document.getElementById("menu");
const div = document.querySelector(".hour");
const DOM = document;

document.addEventListener("click", (e) => {
    // Event the main button
    if (e.target.matches("#btn") || e.target.matches(`#btn *`)) {
        changeMainStyle();
    }
    if (e.target.matches(".menuLink")) {
        changeMainStyleLink();
    }
    if (e.target.matches("#start")) {
        startRelog(div, e);
    }
    if (e.target.matches("#stop")) {
        stopRelog(div);
    }
    if (e.target.matches("#startAlarm")) {
        startAlarm(e);
    }
    if (e.target.matches("#stopAlarm")) {
        stopAlarm();
    }
    if (e.target.matches("#startKeyBoard")) {
        startKeyBoard();
    }
})

DOM.addEventListener("keydown", (e) => {
    console.log(e.keyCode);
})
import { changeMainStyle, changeMainStyleLink } from './btnhamburger.js';
import { startAlarm } from './relog-digital.js';

export const btn = document.getElementById("btn");
export const list = document.getElementById("menu");

document.addEventListener("click", (e) => {
    // Event the main button
    if (e.target.matches("#btn") || e.target.matches(`#btn *`)) {
        changeMainStyle();
    }
    if (e.target.matches(".menuLink")) {
        changeMainStyleLink();
    }
    if (e.target.matches("#start")) {
        const div = document.querySelector(".hour");
        startAlarm(div);
    }
})
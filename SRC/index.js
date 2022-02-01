import { changeMainStyle } from './btnhamburger.js';

export const btn = document.getElementById("btn");
export const list = document.getElementById("menu");

document.addEventListener("click", (e) => {
    // Event the main button
    if (e.target.matches("#btn")) {
        changeMainStyle();
    }
})
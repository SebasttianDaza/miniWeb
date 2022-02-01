
import { btn, list } from "./index.js";

export function changeMainStyle () {

    btn.classList.toggle("is-active");
    list.classList.toggle("show");
}
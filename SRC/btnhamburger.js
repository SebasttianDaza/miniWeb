
import { btn, list } from "./index.js";

export function changeMainStyle (e) {

    btn.classList.toggle("is-active");
    list.classList.toggle("is-actives");

}

export function changeMainStyleLink (e) {

    btn.classList.remove("is-active");
    list.classList.remove("is-actives");

}

import { btn, list } from "./index.js";
import { changeClassList, removeClassList } from "./changeStyle.js";

export function changeMainStyle (e) {
    changeClassList(btn, "is-active");
    changeClassList(list, "is-actives");
    changeClassList(document.body, "menu");
}

export function changeMainStyleLink (e) {
    removeClassList(btn, "is-active");
    removeClassList(list, "is-actives");
    if (document.body.classList.contains("menu")) {
        removeClassList(document.body, "menu");
    }
}
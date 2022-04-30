
import { DOM, btn, list } from "../index.js";

import { changeClassList, removeClassList } from "../Utils/changeStyle.js";

export function changeMainStyle (e) {
    changeClassList(btn, "is-active");
    changeClassList(list, "is-actives");
    changeClassList(DOM.body, "menu");
}

export function changeMainStyleLink (e) {
    removeClassList(btn, "is-active");
    removeClassList(list, "is-actives");
    if (DOM.body.classList.contains("menu")) {
        removeClassList(DOM.body, "menu");
    }
}
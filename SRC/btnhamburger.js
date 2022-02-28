
import { btn, list } from "./index.js";
import { changeClassList, removeClassList } from "./changeStyle.js";

export function changeMainStyle (e) {
    changeClassList(btn, "is-active");
    changeClassList(list, "is-actives");
}

export function changeMainStyleLink (e) {
    removeClassList(btn, "is-active");
    removeClassList(list, "is-actives");
}
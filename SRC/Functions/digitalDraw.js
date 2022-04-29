import { WINDOW } from "../updown";

const digitalDraw = (list) => {
    const random = Math.floor(Math.random() * list.length);
    const win = list[random];
    WINDOW.alert(`This is the ${win.textContent}`);
}

export default digitalDraw;
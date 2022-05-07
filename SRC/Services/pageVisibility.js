import { DOM, WINDOW } from "../index.js";

const handleVisibilityPage = (handleVideo) => {
    let hidden, visibilityChange;

    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }


    if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
        return;
    } else {
        WINDOW.addEventListener(visibilityChange, handleVideo, false);
    }
}

export default handleVisibilityPage;
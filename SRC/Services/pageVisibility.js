import { DOM } from "../index.js";

const handleVisibilityPage = () => {
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

    const $videos = DOM.querySelectorAll(".video");

    const handleVideo = () => {
        if (document[hidden]) {
            $videos.forEach(($video) => {
                $video.pause();
                $video.currentTime = 0;
                $video.muted = true;
                console.log("video paused");
            });
        }
    }

    if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
        return;
    } else {
        document.addEventListener(visibilityChange, handleVideo, false);
    }
}

export default handleVisibilityPage;
import { DOM } from "../index.js";

const handleVideo = () => {
    const $videos = DOM.querySelectorAll(".video");


    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 
    }

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if(!entry.isIntersecting) {
                entry.target.pause();
                entry.target.currentTime = 0;
                entry.target.muted = true;
            } else {
                entry.target.play();
                entry.target.muted = false;
            }
        })
    }


    const observer = new IntersectionObserver(handleIntersection, options);
    $videos.forEach(($video) => {
        observer.observe($video);
    })
}

export default handleVideo;
import { NAV, DOM } from "../index.js";

async function getUseMedia(constraints, content) {
    try {
        const $video = DOM.getElementById(constraints);
        if(NAV.mediaDevices.getUserMedia) {
            const stream = await NAV.mediaDevices.getUserMedia({
                video: true,
                audio: false
            });
            $video.srcObject = stream;
            $video.play();
        }
    } catch (e) {
        const $content = DOM.getElementById(content);
        $content.innerHTML = `<reusable-elements information="${e}" content="${content}" morecontent="${constraints}" secondcontent="getUserMedia" ></reusable-elements>`;
    }
}

export default getUseMedia;
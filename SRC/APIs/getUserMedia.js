import { NAV } from "../index.js";

async function getUseMedia(constraints) {
    try {
        const stream = await NAV.mediaDevices.getUserMedia();
        console.log(stream);
    } catch (e) {
        console.log(e);
    }
}

export default getUseMedia;
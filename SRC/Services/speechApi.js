import { DOM, WINDOW } from "../index.js";

const speechApi = () => {
    const $speechSelect = DOM.getElementById("selectSpeech"),
        $speechText = DOM.getElementById("text"),
        $speechButton = DOM.getElementById("btnSpeech");

    let SpeechMessage = new SpeechSynthesisUtterance();

   let voices = [];

    DOM.addEventListener("DOMContentLoaded", () => {
        //Get voices
        WINDOW.speechSynthesis.onvoiceschanged = () => {
            voices = WINDOW.speechSynthesis.getVoices();
            voices.map((voice) => {
                const $option = `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`;

                $speechSelect.insertAdjacentHTML("beforeend", $option);
            })
        }
    });

    DOM.addEventListener("change", (e) => {
        //Set voice selected
        if (e.target === $speechSelect) {
            SpeechMessage.voice = voices.find((voice) => voice.name === e.target.value);
        }
    });

    DOM.addEventListener("click", (e) => {
        //Speak
        if(e.target === $speechButton) {
            if ($speechText.value !== "") {
                SpeechMessage.text = $speechText.value;
                WINDOW.speechSynthesis.speak(SpeechMessage);
            } else {
                alert("No hay texto para hablar");
            }
        }
    })

}

export default speechApi;
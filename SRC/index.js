import {responsiveResponsible, changeWebComponent} from "./objectResposive.js";
import { changeMainStyle, changeMainStyleLink } from './btnhamburger.js';
import { startRelog, stopRelog, startAlarm, stopAlarm } from './relog-digital.js';
import { startKeyBoard, shortcut } from './keyBoard.js';
import { countDown } from "./coutdown.js";
import { stylesDown, WINDOW } from './updown.js';
import { identifyTheme } from './theme.js';
import { ReusableElements } from "./Components/Reusable/Reusable.js";


const btn = document.getElementById("btn");
const list = document.getElementById("menu");
const div = document.querySelector(".hour");


document.addEventListener("DOMContentLoaded", (e) => {
    changeWebComponent(
      "four",
      `<reusable-elements information="This information component" nameInformation="Window Scroll" nameTwo="Window" nameThree="Navigator"></reusable-elements>`
    );
    changeWebComponent(
      "five",
      `<reusable-elements information="Information theme" nameInformation="Window Scroll" nameTwo="Window" nameThree="Navigator"></reusable-elements>`
    );
    responsiveResponsible(
      "contents",
      "(max-width: 767px)",
      `<reusable-elements information="This information"  nameInformation="Window Scroll" nameTwo="Window" nameThree="Navigator"></reusable-elements>`,
      `<div id="background" >
            <div id='elementBall' class="bull"></div>
        </div>`
    );
    stylesDown();
    identifyTheme(document.getElementById("spanBtn"));
})

document.addEventListener("click", (e) => {
    // Event the main button
    if (e.target.matches("#btn") || e.target.matches(`#btn *`)) {
        changeMainStyle();
    }
    if (e.target.matches(".menuLink")) {
        changeMainStyleLink();
    }
    if (e.target.matches("#start")) {
        startRelog(div, e);
    }
    if (e.target.matches("#stop")) {
        stopRelog(div);
    }
    if (e.target.matches("#startAlarm")) {
        startAlarm(e);
    }
    if (e.target.matches("#stopAlarm")) {
        stopAlarm();
    }
    if(e.target.matches("#btnCountDown")) {
        
        countDown(
          document.getElementById("Date").value,
          document.getElementById("countDownTime"),
          e
        );
    }

})

document.addEventListener("keydown", (e) => {
    shortcut(e);
    startKeyBoard(
      e,
      document.getElementById("background"),
      document.querySelector("#elementBall")
    );
})

WINDOW.customElements.define("reusable-elements", ReusableElements);


export { btn, list };
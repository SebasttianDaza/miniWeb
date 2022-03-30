import {responsiveResponsible, changeWebComponent} from "./objectResposive.js";
import testForm from "./responsiveTester.js";
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
      `<reusable-elements information="This section show as work with Event Scroll and you can to make a button with funcionalitie climb to the initial part of the project and we also can to work with styles of the differents sections as Nav, you can to get more information about this." content="Window Event" morecontent="Event scroll" secondcontent="Scroll Y and Click"></reusable-elements>`
    );
    changeWebComponent(
      "five",
      `<reusable-elements information="This section I was working with a button to change Themes of the website, indefitying the theme about preferences of the device. It also have to save the theme you preference and finally we worked with styles and tags personalities." content="Match media" morecontent="Local storage" secondcontent="Styles and responsive"></reusable-elements>`
    );
    responsiveResponsible(
      "contents",
      "(max-width: 767px)",
      `<reusable-elements information="This section I was working with styles and collision detection, events keyboard to can move a ball in of a range. Only available for PC. Also It have short cuts as Shift, v to open Main and Alt + z to open window  " content="Collsion detection" morecontent="Event Keydown" secondcontent="getBoundingClientRect" ></reusable-elements>`,
      `<div id="background" >
            <div id='elementBall' class="bull"></div>
        </div>`
    );
    stylesDown();
    identifyTheme(document.getElementById("spanBtn"));
    testForm("formTester");
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
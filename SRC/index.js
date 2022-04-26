import ReusableElements from "./Components/Reusable/Reusable.js";
import {responsiveResponsible, changeWebComponent} from "./objectResposive.js";
import connection from "./connection.js";
import testForm from "./responsiveTester.js";
import userAgent from './userAgent.js';
import { changeMainStyle, changeMainStyleLink } from './btnhamburger.js';
import { startRelog, stopRelog, startAlarm, stopAlarm } from './relog-digital.js';
import { startKeyBoard, shortcut } from './keyBoard.js';
import { countDown } from "./coutdown.js";
import { stylesDown} from './updown.js';
import { identifyTheme } from './theme.js';


const DOM = document;
const NAV = navigator;
const btn = DOM.getElementById("btn");
const list = DOM.getElementById("menu");
const div = DOM.querySelector(".hour");

customElements.get("reusable-elements")  || customElements.define("reusable-elements", ReusableElements);


DOM.addEventListener("DOMContentLoaded", (e) => {
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
    identifyTheme(DOM.getElementById("spanBtn"));
    stylesDown();
    testForm("formTester");
    userAgent("userAgent");
})

DOM.addEventListener("click", (e) => {
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
          DOM.getElementById("Date").value,
          DOM.getElementById("countDownTime"),
          e
        );
    }

})

DOM.addEventListener("keydown", (e) => {
    shortcut(e);
    startKeyBoard(
      e,
      DOM.getElementById("background"),
      DOM.querySelector("#elementBall")
    );
})


connection();


export { btn, list, NAV };
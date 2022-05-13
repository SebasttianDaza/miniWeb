import "./App.js";
import ReusableElements from "./Components/Reusable/Reusable.js";
import Card from "./Components/Card/Card.js";
import {responsiveResponsible, changeWebComponent} from "./Utils/objectResposive.js";
import testForm from "./Functions/responsiveTester.js";
import userAgent from './Functions/userAgent.js';
import { stylesDown} from './Functions/updown.js';
import { identifyTheme } from './Functions/theme.js';
import getUseMedia from "./APIs/getUserMedia.js";
import getGeolocation from "./APIs/getGeolocation.js";
import handleSlider from "./Functions/slider.js";     
import filterResults from "./Functions/filterResults.js";  
import connection from "./Utils/connection.js";
import ScrollSpy from "./Services/intersectionObserver.js";
import handleVideo from "./Services/videoIntelligent.js";
import handleForm from "./Services/handleForm.js";
import speechApi from "./Services/speechApi.js";


const DOM = document, NAV = navigator, WINDOW = window;
const btn = DOM.getElementById("btn");
const list = DOM.getElementById("menu");


customElements.get("reusable-elements")  || customElements.define("reusable-elements", ReusableElements);

customElements.get("component-card")  || customElements.define("component-card", Card);

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
    getUseMedia("webcam", "getUserMedia");
    getGeolocation("geolocation");
    handleSlider(); 
    ScrollSpy();
    handleVideo();
    handleForm();
  })
  
connection();
filterResults(".Card");
speechApi();


export { btn, list, NAV, DOM, WINDOW };
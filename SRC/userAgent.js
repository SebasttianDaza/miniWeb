import { NAV } from './index.js';
import { responsiveResponsible } from "./objectResposive.js";


export default function userAgent (idElement) {
    const userAgents = NAV.userAgent;
    const $element = document.getElementById(idElement),
    isMobile = {
        Android: () => userAgents.match(/Android/i), //Busca la expresion en la cadena, ademas con la i que no importa si es mayusculas o minusculas
        ios : () => userAgents.match(/iPhone|iPad|iPod/i),
        Windows: () => userAgents.match(/windows.phone/i),
        Any: function () {
            return (this.Android() || this.ios() || this.Windows());
        }

    },

    isDesktop = {
        Mac: () => userAgents.match(/Mac os/i),
        Windows: () => userAgents.match(/windows nt/i),
        Linux: () => userAgents.match(/linux/i),
        Any: function () {
            return (this.Mac() || this.Windows() || this.Linux());
        }
    },

    isBrowser = {
        Chrome: () => userAgents.match(/Chrome/i),
        Firefox: () => userAgents.match(/Firefox/i),
        Safari: () => userAgents.match(/Safari/i),
        Opera: () => userAgents.match(/Opera/i),
        IE: () => userAgents.match(/MSIE/i),
        Edge: () => userAgents.match(/Edge/i),
        Any: function () {
            return (this.Chrome() || this.Firefox() || this.Safari() || this.Opera() || this.IE() || this.Edge());
        }
    }
    let template = `
    <div class="userAgent">
        <div class="userAgentString">
            <p id="contentUser">${userAgents.split("/(?=[A-Z])/")}</p>
        </div>
        <div class="userAgentContent">
            <div class="userAgentChild">
                <h3>Platform</h3>
            <p>
                ${isMobile.Any() ? isMobile.Any() : isDesktop.Any()}
            </p>
            </div>
            <div class="userAgentChild">
                <h3>Browser</h3>
            <p>${isBrowser.Any() ? isBrowser.Any() : "Not found"}</p>
            </div>
        </div>
    <div>
    `;

    $element.innerHTML = template;

    innerAboutBrowser(isBrowser, $element);
    responsiveResponsible(
      "contentUser",
      "(max-width: 768px)",
      //Cortar string a la mitad
      `${userAgents.substring(0, userAgents.length / 1.3)}`,
      `${userAgents.split("/(?=[A-Z])/")}`
    );
};


function innerAboutBrowser(isBrowser, $element) {
    if(isBrowser.Chrome() || isBrowser.Safari()) {
        $element.innerHTML += `<reusable-elements information="This section only users the Chrome" content="Navigator" morecontent="Event scroll" secondcontent="userAgent"></reusable-elements>`;
    }
    if(isBrowser.Firefox()) {
        $element.innerHTML += `<reusable-elements information="This section only users the Firefox" content="Navigator" morecontent="Event scroll" secondcontent="userAgent"></reusable-elements>`;
    }
    if(isBrowser.Opera() || isBrowser.IE() || isBrowser.Edge()) {
        $element.innerHTML += `<reusable-elements information="This section only users the Opera" content="Navigator" morecontent="Event scroll" secondcontent="userAgent"></reusable-elements>`;
    }
}
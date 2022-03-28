import {DOM, WINDOW} from './updown.js';


export const responsiveResponsible = (idElement, mediaQuery, mobileContent, webContent) => {
    let breakpoint = WINDOW.matchMedia(mediaQuery);
    console.log(breakpoint);

    const checkElement = (e) => {
        if(e.matches) {
            DOM.getElementById(idElement).innerHTML = mobileContent;
        } else {
            DOM.getElementById(idElement).innerHTML = webContent;
        }
    };

    breakpoint.addListener(checkElement);
    checkElement(breakpoint);
};

export const changeWebComponent = (idElement, webContent) => {
    DOM.getElementById(idElement).insertAdjacentHTML('beforeend', webContent);
};


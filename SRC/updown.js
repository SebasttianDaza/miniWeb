import { addClassList, removeClassList } from './changeStyle.js';

const DOM = document, WINDOW = window;


export function stylesDown () {
    const nav = document.getElementById("navegation");
    const navLink = document.getElementById("btnScroll");

    
    WINDOW.addEventListener("scroll", (e) => {
        if(WINDOW.scrollY >= 80) {
          addClassList(nav, "nav-down");
        } else {
          removeClassList(nav,"nav-down");
        }

        if (WINDOW.scrollY >= 720) {
          addClassList(navLink,"hidden");
        } else {
          removeClassList(navLink,"hidden");
        }
    })

    DOM.addEventListener("click", (e) => { 
        if (e.target.matches("#btnScroll") || e.target.matches(`#btnScroll *`)) {
          WINDOW.scrollTo({
            behavior: "smooth",
            top: 0,
          });
        }
    })
    

    
}
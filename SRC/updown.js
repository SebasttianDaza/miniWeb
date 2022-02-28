import { addClassList, removeClassList } from './changeStyle.js';

const DOM = document, WINDOW = window;


export function stylesDown() {
  const nav = document.getElementById("navegation");
  const btnUp = document.getElementById("btnScroll");

  WINDOW.addEventListener("scroll", (e) => {
    const scrollYDOM = WINDOW.scrollY || DOM.scrollTop;
    if (scrollYDOM >= 80) {
      addClassList(nav, "nav-down");
    } else {
      removeClassList(nav, "nav-down");
    }

    if (scrollYDOM >= 720) {
      addClassList(btnUp, "hidden");
    } else {
      removeClassList(btnUp, "hidden");
    }
  });

  DOM.addEventListener("click", (e) => {
    if (e.target.matches("#btnScroll") || e.target.matches(`#btnScroll *`)) {
      WINDOW.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
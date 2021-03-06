import { addClassList, removeClassList } from '../Utils/changeStyle.js';
import { DOM , WINDOW} from '../index.js';


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
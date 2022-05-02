import { DOM } from "../index.js";

const filterResults = (card) => {
    const $content = DOM.querySelectorAll(card)
    DOM.addEventListener("keyup", (e) => {
        if (e.target.matches("#filter")) {

          if(e.key === "Escape") e.target.value = ""

          let value = e.target.value.toLowerCase();
          $content.forEach((item) => {
            let $item = item.children[1].textContent.toLowerCase();
            if ($item.indexOf(value) != -1) {
              item.parentNode.classList.remove("filter");
            } else {
              item.parentNode.classList.add("filter");
            }
          })
        }
    })
};

export default filterResults;
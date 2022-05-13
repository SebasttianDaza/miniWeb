import { DOM } from "../index.js";
const ScrollSpy = () => {
    const $sections = DOM.querySelectorAll("section[data-scroll-spy]");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // 0.5 = 50%, 1 = 100%, 0 = 0%
    }

    const showHide = (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
          if(entry !== null) {
            if (entry.isIntersecting) {
              //Su elemento padre aplica la clase
              DOM.querySelector(
                `li[data-scroll-spy][id="#${id}"]`
              ).classList.add("is-actives");

              DOM.querySelector(
                `a[data-scroll-spy][href="#${id}"]`
              ).classList.add("is-actives");
            } else {
              DOM.querySelector(
                `li[data-scroll-spy][id="#${id}"]`
              ).classList.remove("is-actives");

              DOM.querySelector(
                `a[data-scroll-spy][href="#${id}"]`
              ).classList.remove("is-actives");
            }
          }
        });
    }

    const observer = new IntersectionObserver(showHide, options);
    $sections.forEach(($section) => {
        observer.observe($section);
    })

}

export default ScrollSpy;
import { DOM, WINDOW } from "./updown.js";

export default function testForm (form) {
    const $form = DOM.getElementById(form);
    let tester;

    DOM.addEventListener("submit", (e) => {
        if(e.target === $form) {
            e.preventDefault();
            if($form.url.value === "") {
                tester = new Error("URL is empty");
                $form.url.focus();
            } else {
                tester = WINDOW.open(
                  $form.url.value,
                  "tester",
                  `innerWidth=${$form.width.value},innerHeight=${$form.height.value}`
                );
            }
        }
    })

    DOM.addEventListener("click", (e) => {
        if(e.target === $form.Close) {
            if(tester === undefined) { 
                e.target.disabled = true;
            } else  {
                tester.close();
                e.target.disabled = false;
            }
        }
    })
}
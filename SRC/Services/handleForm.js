import { DOM } from "../index.js";

const handleForm = () => {

    const $form = DOM.getElementById("formContact");
    const $inputs = DOM.querySelectorAll(".formContacts [required]");

    $inputs.forEach((input) => {
        const $span = DOM.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none");

        input.insertAdjacentElement("afterend", $span);
    });


    //Se puede validar cuando el usuario presiona el boton de enviar

    DOM.addEventListener("keyup", (e) => {
        if (e.target.matches(".formContacts [required]")) {
            let target = e.target,
            pattern = target.pattern || target.getAttribute("data-pattern");

            if (pattern && target.value !== "") {
                let regex = new RegExp(pattern);
                return !regex.exec(target.value)
                  ? DOM.getElementById(`${target.name}`).classList.add(
                      "is-visible"
                    )
                  : DOM.getElementById(`${target.name}`).classList.remove(
                      "is-visible"
                    );
            }

            if (!pattern) {
                console.log("No hay pattern");
                return target.value === ""
                    ? DOM.getElementById(`${target.name}`).classList.add(
                        "is-visible"
                    )
                    : DOM.getElementById(`${target.name}`).classList.remove("is-actives");
            }

        }
    })
}


export default handleForm;

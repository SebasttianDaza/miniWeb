import { DOM } from "../index.js";

const handleForm = () => {
    DOM.addEventListener("submit", (e) => {
        e.preventDefault();
        if (e.target.id === "formContact") {
            console.log(e.target);
        }
    })
}

export default handleForm;
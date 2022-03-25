export class ReusableElements extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return [];
    }

    connectedCallback() {
        const template = document.createElement('template');
        template.innerHTML = ``;
    }
}

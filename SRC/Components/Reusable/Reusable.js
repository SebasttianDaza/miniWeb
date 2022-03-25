export class ReusableElements extends HTMLElement {
    static get observedAttributes() {
        return ["information"];
    }

    constructor() {
        super();
        this.information;
    }

    render(information) {
        this.innerHTML = `
            <style>
                .reusable-elements {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                    width: 60vw;
                    height: 40vh;
                    grid-gap: 2rem;
                    border: 1px solid var(--color-text);
                    border-radius: 5px;
                    padding: 1rem;
                    overflow: clip;
                }

                @media screen and (max-width: 900px) {
                }
            </style>
            <article class="reusable-elements">
                <div class="informationReusable">
                    <p>
                        ${information}
                    </p>
                </div>
                <div>
                    <p>
                        this explication about this component
                    </p>
                </div>
            </article>
        
        `;
    }

    connectedCallback() {
        this.render(this.information);

    }

    disconnectedCallback() {
        console.log("disconnected");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
        switch (name) {
            case "information":
                this.information = newValue;
                break;
        }
    }
}

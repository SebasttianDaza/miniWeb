export class ReusableElements extends HTMLElement {
    static get observedAttributes() {
        return ["information", "nameInformation", "nameTwo", "nameThree", "otherName"];
    }

    constructor() {
        super();
        this.information;
        this.nameInformation;
        this.nameTwo;
        this.nameThree;
        this.otherName;
    }

    

    render(information, nameInformation) {
        this.innerHTML = `
            <style>
                .reusable-elements {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
                    ${nameInformation}
                </div>
            </article>
        
        `;
    }

    connectedCallback() {
        this.render(this.information, this.nameInformation);
        console.log(this.informationValue);
        console.log(this.nameInformation);
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
            case "nameInformation":
                this.nameInformation = newValue;
                break;
            case "nameTwo":
                this.nameTwo = newValue;
                break;
            case "nameThree":
                this.nameThree = newValue;
                break;
            case "otherName":
                this.otherName = newValue;
                break;
        }
    }
}

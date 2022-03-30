export class ReusableElements extends HTMLElement {
    static get observedAttributes() {
        return ["information", "content", "morecontent", "secondcontent"];
    }

    constructor() {
        super();
        this.information;
        this.content;
        this.morecontent;
        this.secondcontent;
    }

    

    render(information) {
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

                .informationReusable {
                    overflow: clip;
                }
                .informationReusable p {
                    margin: 0;
                    padding: 0;
                }
                
                .informationShare {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    grid-gap: 1rem;
                    text-align: center;
                    overflow: clip;
                    height: auto;
                }

                .informationShare p {
                    height: 5vh;
                    background-color: var(--color-main);
                    color: var(--color-text);
                    border-radius: 5px;
                    margin: 0;
                    padding: 0.5rem;
                }

                @media screen and (max-width: 900px) {
                    .reusable-elements {
                        height: auto;
                    } 
                }
            </style>
            <article class="reusable-elements">
                <div class="informationReusable">
                    <p>
                        ${information}
                    </p>
                </div>
                <div class="informationShare">
                    <p>${this.content}</p>
                    <p>${this.morecontent}</p>
                    <p>${this.secondcontent}</p>
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
            case "content":
                this.content = newValue;
                break;
            case "morecontent":
                this.morecontent = newValue;
                break;
            case "secondcontent":
                this.secondcontent = newValue;
                break;
        }
    }
}

export default class Card extends HTMLElement {
  static get observedAttributes() {
    return ["image", "title"];
  }

  constructor() {
    super();
    this.image;
    this.title;
  }

  render() {
    this.innerHTML = `
            <style>
              img {
                max-width: 100%;
                height: auto;
              }
                .Card {
                  display: flex;
                  flex-direction: column;
                  border: 1px solid white;
                  width: auto;
                  overflow: hidden;
                  height: auto;
                }

                .CardTitle {
                  background-color: white;
                  color: black;
                }

                .CardTitle h3 {
                  margin: 0;
                }
            </style>
            <article class="Card">
                <div class="CardImage">
                    <img loading="lazy" src="${this.image}" alt="">
                </div>
                <div class="CardTitle">
                    <h3>${this.title}</h3>
                </div>
            </article>
        
        `;
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    console.log("disconnected");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
    switch (name) {
      case "image":
        this.image = newValue;
        break;
      case "title":
        this.title = newValue;
        break;
    }
  }
}
class AppHero extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
          <style>
              * {
                  box-sizing: border-box;
              }
              :host{
                display: flex;
                height: 500px;
                width: 100%;
                top: 0;
                font-weight: 700;
                font-size: 1.5em;
                color: #b3541e;
                justify-content: center;
              }

              .hero-text{
                text-align: center;
                padding-top: 10%;
              }
          </style>

          <div class="hero-text">
            <h1 tabindex="0">Yubzz Restaurant</h1>
            <p tabindex="0">
                Saatnya untuk memulai perjalanan kuliner Anda dan menjelajahi
                restoran-restoran lokal.
            </p>
          </div>
          `;
  }
}

customElements.define('app-hero', AppHero);

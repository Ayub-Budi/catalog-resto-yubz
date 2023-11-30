class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
    }
    
    :host {
      position: -webkit-sticky;
      position: sticky;
      top: 0; /* Add this line to make it sticky at the top */
      display: flex;
      background-color: #461111;
      justify-content: space-around;
      height: 90px;
      align-items: center;
      color: rgb(167, 167, 236);
    }
    
    .nav-input {
      display: inline;
      margin: 10px;
    }
    
    button {
      width: 50px;
      height: 44px;
      cursor: pointer;
    }
    
    button:hover {
      background: #b3541e;
      color: white;
    }

    .nav-list.open {
      transform: translate(0, 0);
    }
    
    input {
      width: 50%;
      display: inline-block;
      min-width: 44px;
      min-height: 44px;
    }
    
    ul {
      display: flex;
      list-style: none;
      width: 40%;
      justify-content: space-between;
    }
    
    ul li a {
      color: white;
      text-decoration: none;
    }

    a {
      display: inline-block;
      min-width: 44px;
      min-height: 44px;
    }
    
    ul li a:hover {
      color: #b3541e;
    }

    
    .menu {
      display: none;
      flex-direction: column;
      width: 44px;
      height: 44px;
      justify-content: space-between;
      font-size: 30px;
      color: #461111;
    }
    
    /* responsive */
    @media screen and (max-width: 768px) {

      ul {
        width: 70%;
      }
    }

    @media screen and (max-width: 1024px) {

      ul {
        width: 70%;
      }
    }
    
    @media screen and (max-width: 576px) {
      .menu {
        display: flex;
      }
      
      ul {
        width: 40%;
        position: absolute;
        right:  0;
        top: 0;
        height: 100vh;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        background-color: #461111;
        z-index: -2;
        transform: translate(0, -100vh);
      }
    
      ul.slide {
        transform: translate(0,0)
      }
    }
  </style>

  <div class="nav-input">
  <h1>yubzz</h1>
  </div>
  <ul id="navigationDrawer">
    <li><a href="#/now-playing">Home</a></li>
    <li><a href="#favorite">Favorite</a></li>
    <li><a href="https://www.linkedin.com/in/ayub09/">About Us</a></li>
  </ul>
  <button class="menu" id="hamburgerButton">
    ☰
  </button>

        `;

    // const menu = this.shadowDOM.querySelector('.menu');
    // const nav = this.shadowDOM.querySelector('ul');

    // menu.addEventListener('click', function () {
    //   nav.classList.toggle('slide');
    // });
  }
}

customElements.define('nav-bar', NavBar);

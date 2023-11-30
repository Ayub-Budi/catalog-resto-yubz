import 'regenerator-runtime'; /* for async await transpile */
import '../styles/content.css';
import '../styles/detail.css';
import '../styles/loader.css';
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './component/app-hero';

import App from './view/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

console.log('Hello Coders! :)');

import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="loader-wrapper">
          <div class="loader"></div>
      </div>
      <div class="content">
        <h2 class="content__heading">Daftar Restaurant Favorite</h2>
        <div id="restos" class="list"></div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');
    const loader = document.querySelector('.loader-wrapper');

    try {
      if (restos.length === 0) {
        restosContainer.innerHTML = 'tidak ada restaurant yang disukai';
      }
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
      loader.style.display = 'none';
    } catch (err) {
      restosContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
      loader.style.display = 'none';
    }
  },
};

export default Like;

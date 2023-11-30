import RestaurantSource from '../../data/resturant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const InfoResto = {
  async render() {
    return `
      <div class="loader-wrapper">
          <div class="loader"></div>
      </div>
      <div class="content">
        <h2 class="content__heading">Daftar Restaurant</h2>
        <div id="restos" class="list">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await RestaurantSource.infoRestaurant();
    const restosContainer = document.querySelector('#restos');
    const loader = document.querySelector('.loader-wrapper');

    try {
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

export default InfoResto;

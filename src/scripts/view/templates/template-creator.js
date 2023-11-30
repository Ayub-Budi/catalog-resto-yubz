const createRestoDetailTemplate = (resto) => `
  <div class="detail" id="${resto.id}">
  <h2 class="name">${resto.name}</h2>
    <div class="detail-resto">
      <div class="poster">
        <figure>
          <img class="lazyload" src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}" loading="lazy" crossorigin="anonymous" alt="${resto.name}" tabindex="0"/>

          <figcaption tabindex="0">${resto.categories.map((category) => `
          <span>${category.name}</span>
          `).join('')}
          ⭐️ ${resto.rating}</figcaption>
          <figcaption tabindex="0">Kota : ${resto.city}</figcaption>
          <figcaption tabindex="0">Alamat : ${resto.address}</figcaption>
        </figure>
      </div>

      <div class="deskripsi">
        <h2>Deskripsi</h2>
        <p tabindex="0">
        ${resto.description}
        </p>
      </div>
    </div>

    <div class="menu">
      <div class="daftar-menu">
        <div class="list-menu">
          <h3 tabindex="0">Menu Makanan</h3>
            <ul>
              ${resto.menus.foods.map((food) => `
                <li tabindex="0">${food.name}</li>
              `).join('')}
            <ul>
        </div>
        <div class="list-menu">
          <h3 tabindex="0">Menu Minuman</h3>
            <ul>
              ${resto.menus.drinks.map((drink) => `
                <li tabindex="0">${drink.name}</li>
              `).join('')}
            <ul>
        </div>
      </div>
    </div>

    <h2 tabindex="0">Reviews</h2>

    <div>
      <div class="input-Review">
        <form action="" tabindex="0">
          <label for="name" tabindex="0">nama</label>
          <input type="text" class="name-review" tabindex="0" id="name-review" name="Nama" placeholder="Nama..">

          <label for="review" tabindex="0">Review</label>
          <input type="text" class="review" tabindex="0" id="review" name="Review" placeholder="Review..">
          <input type="submit" id="submit" tabindex="0" value="Submit" class="submit">
        </form>
      </div>
    </div>

    <h2 tabindex="0">Customer Reviews</h2>

    <div class="hasil-review">
    ${resto.customerReviews.map((review) => `
      <div class="review-item" tabindex="0">
        <div class="review-header" tabindex="0">
          <p class="review-name" tabindex="0"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em;"></i>&nbsp;${review.name}</p>
          <p class="review-date" tabindex="0">${review.date}</p>
        </div>
        <div class="review-body">
          <p tabindex="0">${review.review}</p>
        </div>
      </div>
    `).join('')}
  </div>

  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="card" id="${resto.id}">
    <a href="#/detail/${resto.id}" tabindex="0">
      <div class="card-shadow">
        <div class="poster">

        <p class="rating" tabindex="0">⭐️ ${resto.rating}</p>
        <img class="lazyload" src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}" loading="lazy" crossorigin="anonymous" alt="${resto.name}" tabindex="0" width="400" height="300"/>

        <p class="kota" tabindex="0">${resto.city}</p>
        </div>
        <div class="deskripsi">
          <p class="name" tabindex="0">${resto.name}</p>
          <p tabindex="0" div class="paragraf">
          ${resto.description}
          </p>
        </div>
      </div>
    </a>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button tabindex="0" aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

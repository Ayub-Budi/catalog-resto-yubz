import RestaurantSource from '../data/resturant-source';

const PostReview = (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  RestaurantSource.postRestaurant(dataInput);
};

export default PostReview;

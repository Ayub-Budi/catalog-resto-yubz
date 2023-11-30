import InfoResto from '../view/pages/info-restaurant';
import Like from '../view/pages/like';
import Detail from '../view/pages/detail';

const routes = {
  '/': InfoResto, // default page
  '/info-resto': InfoResto,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;

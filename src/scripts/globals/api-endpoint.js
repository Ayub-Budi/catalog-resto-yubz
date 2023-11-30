import CONFIG from './config';

const API_ENDPOINT = {
  INFO: `${CONFIG.BASE_URL}/list`,
  POST_REVIEW: `${CONFIG.BASE_URL}/review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;

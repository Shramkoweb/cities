import axios from 'axios';
import {REQUEST} from "./constants";

export const createAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: REQUEST.BASE_URL,
    timeout: REQUEST.TIMEOUT,
    withCredentials: true,
    headers: {
      "X-Token": sessionStorage.getItem(`6-sites-token`),
    },
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    if (err.response.status === REQUEST.STATUS_CODE.DENIED) {
      if (err.response.config.method === `get`) {
        return false;
      }
    }
    onLoginFail();
    return true;
  };

  api.interceptors.response.use(onSuccess, onFail);
  api.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem(`6-sites-token`);

      if (token) {
        config.headers = {
          'X-Token': token,
        };
      } else {
        delete api.defaults.headers['X-Token'];
      }
      return config;
    },

    (error) => Promise.reject(error),
  );

  return api;
};

export default createAPI;

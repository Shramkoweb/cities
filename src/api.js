import axios from 'axios';
import {REQUEST} from "./constants";

export const createAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: REQUEST.BASE_URL,
    timeout: REQUEST.TIMEOUT,
    withCredentials: true,
    headers: {
      "X-Token": sessionStorage.getItem(`6-sites-token`),
    }
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

  return api;
};

export default createAPI;

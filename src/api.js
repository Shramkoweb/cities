import axios from 'axios';
import Constants, {REQUEST_STATUS_CODE, URL_ADDRESS} from "./constants";

export const createAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: URL_ADDRESS.BASE,
    timeout: Constants.REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    if (err.response.status === REQUEST_STATUS_CODE.DENIED) {
      onLoginFail();
      return;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;

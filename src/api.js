import axios from 'axios';
import {ActionCreator} from "./reducer/reducer";
import Constants from "./constants";

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: Constants.BASE_URL,
    timeout: Constants.TIMEOUT, // 5sec
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === Constants.ACCESS_DENIED) {
      dispatch(ActionCreator.requireAuthorization(true));
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;

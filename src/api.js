import axios from 'axios';
import {ActionCreator} from "./reducer/user/user";
import Constants from "./constants";

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: Constants.BASE_URL,
    timeout: Constants.TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

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

import axios from 'axios';
import {ActionCreator} from "./reducer/user/user";
import Constants, {REQUEST_STATUS_CODE} from "./constants";

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: Constants.BASE_URL,
    timeout: Constants.REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    if (err.response.status === REQUEST_STATUS_CODE.DENIED) {
      dispatch(ActionCreator.requireAuthorization(true));
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;

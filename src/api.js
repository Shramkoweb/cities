import axios from 'axios';
import {ActionCreator} from "./reducer/user/user";
import Constants, {REQUEST_STATUS_CODE, REQUEST_URL} from "./constants";
import {useHistory} from "react-router-dom";

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: REQUEST_URL.BASE,
    timeout: Constants.REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    console.log(response);
    return response;
  };

  const onFail = (err) => {
    if (err.response.status === REQUEST_STATUS_CODE.DENIED) {
      dispatch(ActionCreator.requireAuthorization(true));
      // useHistory().push(`/login`);
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;

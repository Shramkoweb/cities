import {URL_ADDRESS} from "../../constants";
import userDataAdapter from "../../adapters/user-data-adapter";

const initialState = {
  isAuthorizationRequired: true,
  userData: {},
};

const Action = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  AUTHORIZATION: `AUTHORIZATION`,
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: Action.REQUIRED_AUTHORIZATION,
    payload: status
  }),

  authorization: (userData) => ({
    type: Action.AUTHORIZATION,
    payload: userData
  }),
};

const Operation = {
  sendAuthData: (authData) => (dispatch, _, api) => {
    return api.post(URL_ADDRESS.LOGIN, authData)
      .then(({data}) => {
        dispatch(ActionCreator.authorization(userDataAdapter(data)));
        dispatch(ActionCreator.requireAuthorization(false));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {isAuthorizationRequired: action.payload});
    case Action.AUTHORIZATION:
      return Object.assign({}, state, {userData: action.payload});
  }
  return state;
};

export {ActionCreator, Action, reducer, Operation};

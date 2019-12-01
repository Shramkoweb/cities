import {REQUEST_URL} from "../../constants";

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
  fetchAuthData: (authData) => (dispatch, _, api) => {
    return api.post(REQUEST_URL.LOGIN, authData)
      .then(({data}) => {
        dispatch(ActionCreator.authorization(data));
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

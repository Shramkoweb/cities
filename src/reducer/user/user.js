import {REQUEST} from "../../constants";

const initialState = {
  isAuthorizationRequired: true,
  userData: {},
};

const Action = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  AUTHORIZATION: `AUTHORIZATION`,
  ERROR: ``,
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: Action.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  authorization: (userData) => ({
    type: Action.AUTHORIZATION,
    payload: userData,
  }),

  setError: (error) => ({
    type: Action.ERROR,
    payload: error,
  }),
};

const Operation = {
  sendAuthData: (authData) => (dispatch, _, api) => {
    return api.post(`/login`, authData)
      .then(({data}) => {
        sessionStorage.setItem(`6-sites-token`, data.token);
        dispatch(ActionCreator.authorization(data));
        dispatch(ActionCreator.requireAuthorization(false));
      })
      .catch(() => dispatch(ActionCreator.setError(`Something went wrong, check filled data 😥😥😥`)));
  },

  onCheckAuth: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then(({status, data}) => {
        if (status === REQUEST.STATUS_CODE.SUCCESS) {
          dispatch(ActionCreator.authorization(data));
          dispatch(ActionCreator.requireAuthorization(false));
        }
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {isAuthorizationRequired: action.payload});
    case Action.AUTHORIZATION:
      return Object.assign({}, state, {userData: action.payload});
    case Action.ERROR:
      return Object.assign({}, state, {error: action.payload});
  }
  return state;
};

export {ActionCreator, Action, initialState, reducer, Operation};

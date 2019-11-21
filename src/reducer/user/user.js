const initialState = {
  isAuthorizationRequired: false,
};

const Action = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: Action.REQUIRED_AUTHORIZATION,
    payload: status
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {isAuthorizationRequired: action.payload});
  }
  return state;
};

export {ActionCreator, Action, reducer};

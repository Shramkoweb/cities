import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.USER;

const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].isAuthorizationRequired;
};

const getUserData = (state) => {
  return state[NAME_SPACE].userData;
};

const getError = (state) => {
  return state[NAME_SPACE].error;
};

export {
  getAuthorizationStatus,
  getError,
  getUserData,
};

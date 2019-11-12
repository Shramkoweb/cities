import Constants from "./constants";

const convertFloatToPercentage = (rating) => {
  return rating / Constants.MAX_RATING * 100;
};

export {convertFloatToPercentage};

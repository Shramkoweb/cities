import Constants from "./constants";

const convertFloatToPercentage = (rating) => Number(rating / Constants.MAX_RATING * 100);

export {convertFloatToPercentage};

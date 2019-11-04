import Constants from "./constants";

const fractalRatingToPercentage = (rating) => Number(rating / Constants.MAX_RATING * 100);

export {fractalRatingToPercentage};

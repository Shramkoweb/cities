import Constants from "./constants";

const convertFloatToPercentage = (rating) => {
  return rating / Constants.MAX_RATING * 100;
};

const getOffersByCity = (cityOffers, city) => { // TODO временно убрал сюда
  return cityOffers.filter((item) => item.city === city);
};

export {
  convertFloatToPercentage,
  getOffersByCity
};

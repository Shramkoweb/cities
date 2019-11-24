import {createSelector} from "reselect";

import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

const getActiveCity = (state) => {
  return state[NAME_SPACE].currentCity;
};

const getCities = (state) => {
  return [...new Set(state[NAME_SPACE].offers.map((item) => item.city.name))].sort();
};

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const getFilteredOffers = createSelector(
    getOffers,
    getActiveCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export {
  getActiveCity,
  getCities,
  getFilteredOffers,
  getOffers,
};

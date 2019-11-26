import {createSelector} from "reselect";

import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

const getActiveCity = (state) => {
  return state[NAME_SPACE].currentCity;
};

const getCoordinates = createSelector(
    (state) => getFilteredOffers(state).map((element) => element.location.coordinates),
    (coordinates) => coordinates
);

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const getCities = createSelector(
    getOffers,
    (offers) => [...new Set(offers.map((item) => item.city.name))].sort()
);


const getFilteredOffers = createSelector(
    getOffers,
    getActiveCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export {
  getActiveCity,
  getCoordinates,
  getCities,
  getFilteredOffers,
  getOffers,
};

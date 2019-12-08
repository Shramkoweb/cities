import {createSelector} from "reselect";

import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

const getActiveCity = (state) => {
  return state[NAME_SPACE].currentCity;
};

const getLoadingStatus = (state) => {
  return state[NAME_SPACE].isLoading;
};

const getCoordinates = createSelector(
    (state) => getFilteredOffers(state),
    (coordinates) => coordinates.map((element) => element.location.coordinates)
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

const getSpecificOffer = (state, id) => {
  const offers = getOffers(state);

  return offers.find((offer) => offer.id === Number(id));
};

export {
  getActiveCity,
  getCities,
  getCoordinates,
  getFilteredOffers,
  getLoadingStatus,
  getOffers,
  getSpecificOffer,
};

import {createSelector} from "reselect";
import Constants, {SortType} from "../../constants";
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

const getReviews = (state, id) => {
  return state[NAME_SPACE].reviews[id];
};

const getCities = createSelector(
    getOffers,
    (offers) => [...new Set(offers.map((item) => item.city.name))].sort()
);

const getTypeSort = (state) => {
  return state[NAME_SPACE].typeSort;
};

const getFilteredOffers = createSelector(
    getOffers,
    getActiveCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);
// offers.slice() добавил так как почему то нехотело перерисовывать без него, а точнее надо было навести на карточку
// тогда менялся state в catalog и происходил ререндер
const getSortedOffers = createSelector(
    getFilteredOffers,
    getTypeSort,
    (offers, sortType) => {
      switch (sortType) {
        case (SortType.TO_HIGH):
          return offers.slice().sort((current, next) => current.price - next.price);
        case (SortType.TO_LOW):
          return offers.slice().sort((current, next) => next.price - current.price);
        case (SortType.TOP_RATED):
          return offers.slice().sort((current, next) => next.rating - current.rating);
        default:
          return offers;
      }
    }
);

// TODO возможно сделать расчет растояния и брать ближайщие
const getNearbyOffers = createSelector(
    getOffers,
    getFilteredOffers,
    (offers, filteredOffers) => filteredOffers.slice(0, Constants.MAX_MAP_MARKERS)
);

const getOfferById = (state, id) => {
  const offers = getOffers(state);

  return offers.find((offer) => offer.id === id);
};

export {
  getActiveCity,
  getCities,
  getCoordinates,
  getFilteredOffers,
  getLoadingStatus,
  getNearbyOffers,
  getOfferById,
  getSortedOffers,
  getOffers,
  getReviews,
  getTypeSort,
};

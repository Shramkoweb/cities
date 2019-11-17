import {OFFERS as offers} from "../mocks/offers";

const cities = [...new Set(offers.map((item) => item.city))].sort();
const getOffersByCity = (cityOffers, city) => {
  return cityOffers.filter((item) => item.city === city);
};
const currentCity = cities[0];

const initialState = {
  currentCity,
  cities,
  offers,
  offersByCity: getOffersByCity(offers, currentCity)
};

const Action = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_BY_CITY: `GET_OFFERS_BY_CITY`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});
    case Action.GET_OFFERS_BY_CITY:
      return Object.assign({}, state, {offersByCity: getOffersByCity(state.offers, action.payload)});
  }

  return state;
};

const ActionCreator = {
  changeCity: (city) => ({
    type: Action.CHANGE_CITY,
    payload: city
  }),

  getOffersByCity: (city) => ({
    type: Action.GET_OFFERS_BY_CITY,
    payload: city
  })
};

export {
  reducer,
  ActionCreator
};

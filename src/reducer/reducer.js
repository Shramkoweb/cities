import {OFFERS as offers} from "../mocks/offers";

const cities = [...new Set(offers.map((item) => item.city))].sort();

const initialState = {
  currentCity: cities[0],
  cities,
  offers,
};

const Action = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});
    case Action.LOAD_OFFERS:
      return Object.assign({}, state, {offers: action.payload});
  }

  return state;
};

const ActionCreator = {
  changeCity: (city) => ({
    type: Action.CHANGE_CITY,
    payload: city
  }),

  loadOffers: (offers) => ({
    type: Action.LOAD_OFFERS,
    payload: offers
  })
};

const Operation = {
  loadOffers: () => (dispatch) => {
    return fetch(`https://htmlacademy-react-2.appspot.com/six-cities/hotels`)
      .then((response) => response.json())
      .then((offers) => dispatch(ActionCreator.loadOffers(offers)));
  },
};

export {
  reducer,
  ActionCreator,
  Operation
};

import PlaceCardAdapter from "../../adapters/place-card-adapter";
import {REQUEST_URL} from "../../constants";

const initialState = {
  currentCity: null,
  offers: [],
};

const Action = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFERS: `CHANGE_OFFERS`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: Action.CHANGE_CITY,
    payload: city
  }),

  changeOffers: (offers) => ({
    type: Action.CHANGE_OFFERS,
    payload: offers
  }),
};

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(REQUEST_URL.HOTELS)
      .then(({data}) => {
        dispatch(ActionCreator.changeOffers(data));
        dispatch(ActionCreator.changeCity(data[0].city.name));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});
    case Action.CHANGE_OFFERS:
      const parsedOffers = PlaceCardAdapter.parseOffers(action.payload);
      return Object.assign({}, state, {offers: parsedOffers});
  }

  return state;
};

export {Action, Operation, reducer, ActionCreator};

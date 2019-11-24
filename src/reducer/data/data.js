import PlaceCardAdapter from "../../adapters/place-card-adapter";
import Constants from "../../constants";

const initialState = {
  currentCity: null,
  offers: [],
};

const Action = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: Action.CHANGE_CITY,
    payload: city
  }),

  loadOffers: (offers) => ({
    type: Action.LOAD_OFFERS,
    payload: offers
  }),
};

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(Constants.HOTELS_PATH)
      .then(({data}) => {
        dispatch(ActionCreator.loadOffers(data));
        dispatch(ActionCreator.changeCity(data[0].city.name));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});
    case Action.LOAD_OFFERS:
      const parsedOffers = PlaceCardAdapter.parseOffers(action.payload);
      return Object.assign({}, state, {offers: parsedOffers});
  }

  return state;
};

export {Action, Operation, reducer, ActionCreator};

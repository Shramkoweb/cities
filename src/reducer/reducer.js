import {OFFERS as offers} from "../mocks/offers";

const initialState = {
  city: `Amsterdam`,
  offers
};

const Action = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFER_LIST: `GET_OFFERS_LIST`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_CITY:
      return Object.assign({}, state, {city: action.city});
    case Action.GET_OFFER_LIST:
      return state.city;
  }

  return state;
};

const ActionCreator = {
  changeCity: (city) => ({
    type: Action.CHANGE_CITY,
    city
  }),
  getOfferList: () => ({
    type: Action.GET_OFFER_LIST
  })
};


export {
  reducer,
  ActionCreator
};

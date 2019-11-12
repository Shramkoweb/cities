import {OFFERS as offers} from "../mocks/offers";

const initialState = {
  city: `Amsterdam`,
  offers
};

const Action = {
  CHANGE_CITY: `CHANGE_CITY`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
  }

  return state;
};

const ActionCreator = {
  changeCity: (city) => ({
    type: Action.CHANGE_CITY,
    payload: city
  })
};

export {
  reducer,
  ActionCreator
};

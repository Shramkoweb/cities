const initialState = {
  currentCity: null,
  offers: [],
  cities: [],
};

const Action = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_CITIES: `GET_CITIES`,
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

  loadCities: (offers) => {
    return {
      type: Action.GET_CITIES,
      payload: [...new Set(offers.map((item) => item.city.name))].sort()
    };
  },
};

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`hotels`)
      .then(({data}) => {
        dispatch(ActionCreator.loadOffers(data));
      });
  },

  loadCities: () => (dispatch, _, api) => {
    return api.get(`hotels`)
      .then(({data}) => {
        dispatch(ActionCreator.loadCities(data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});
    case Action.LOAD_OFFERS:
      return Object.assign({}, state, {offers: action.payload});
    case Action.GET_CITIES:
      return Object.assign({}, state, {cities: action.payload});
  }

  return state;
};

export {Action, Operation, reducer, ActionCreator};

const initialState = {
  currentCity: null,
  offers: [],
  cities: [],
  isAuthorizationRequired: false,
};

const Action = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  GET_CITIES: `GET_CITIES`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});
    case Action.LOAD_OFFERS:
      return Object.assign({}, state, {offers: action.payload});
    case Action.GET_CITIES:
      return Object.assign({}, state, {cities: action.payload});
    case Action.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {isAuthorizationRequired: action.payload});
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
  }),

  loadCities: (offers) => {
    return {
      type: Action.GET_CITIES,
      payload: [...new Set(offers.map((item) => item.city.name))].sort()
    };
  },

  requireAuthorization: (status) => {
    return {
      type: Action.REQUIRED_AUTHORIZATION,
      payload: status,
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

export {
  reducer,
  ActionCreator,
  Operation
};

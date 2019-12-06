import PlaceCardAdapter from "../../adapters/place-card-adapter";

export const REQUEST_URL = {
  FAVORITE: `/favorite`,
  HOTELS: `/hotels`,
};

const initialState = {
  currentCity: null,
  offers: [],
};

const Action = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFERS: `CHANGE_OFFERS`,
  CHANGE_OFFER_FAVORITE_STATUS: `CHANGE_OFFER_FAVORITE_STATUS`
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

  changeOfferFavoriteStatus: (offer) => ({
    type: Action.CHANGE_OFFER_FAVORITE_STATUS,
    payload: offer
  })
};

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(REQUEST_URL.HOTELS)
      .then(({data}) => {
        dispatch(ActionCreator.changeOffers(data));
        dispatch(ActionCreator.changeCity(data[0].city.name));
      });
  },

  addToFavorites: (id) => (dispatch, _, api) => {
    return api.post(`${REQUEST_URL.FAVORITE}/${id}/1`)
      .then(({data}) => {
        dispatch(ActionCreator.changeOfferFavoriteStatus(PlaceCardAdapter.parseOffer(data)));
      });
  },

  removeFromFavorite: (id) => (dispatch, _, api) => {
    return api.post(`${REQUEST_URL.FAVORITE}/${id}/0`)
      .then(({data}) => {
        dispatch(ActionCreator.changeOfferFavoriteStatus(PlaceCardAdapter.parseOffer(data)));
      });
  }
};

const getOffersWithReplacedFavorite = (offers, favorite) => {
  return offers.map((element) => {
    return element.id === favorite.id ? Object.assign({}, element, favorite) : element;
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.CHANGE_CITY:
      return Object.assign({}, state, {currentCity: action.payload});
    case Action.CHANGE_OFFERS:
      const parsedOffers = PlaceCardAdapter.parseOffers(action.payload);
      return Object.assign({}, state, {offers: parsedOffers});
    case Action.CHANGE_OFFER_FAVORITE_STATUS:
      return Object
        .assign({}, state, {offers: getOffersWithReplacedFavorite(state.offers, action.payload)});
  }

  return state;
};

export {Action, Operation, reducer, ActionCreator};
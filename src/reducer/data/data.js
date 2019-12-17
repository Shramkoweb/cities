import PlaceCardAdapter from "../../adapters/place-card-adapter";
import ReviewAdapter from "../../adapters/review-adapter";
import Constants, {SortType} from "../../constants";

export const RequestUrl = {
  FAVORITE: `/favorite`,
  HOTELS: `/hotels`,
  COMMENTS: `/comments`,
};

const initialState = {
  activeOffer: null,
  currentCity: null,
  favorites: [],
  isLoading: true,
  isReviewSending: false,
  isReviewSent: false,
  offers: [],
  reviews: {},
  typeSort: SortType.POPULAR,
};

const Action = {
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_LOAD_STATUS: `CHANGE_LOAD_STATUS`,
  CHANGE_OFFER_FAVORITE_STATUS: `CHANGE_OFFER_FAVORITE_STATUS`,
  CHANGE_OFFERS: `CHANGE_OFFERS`,
  LOCK_FORM: `LOCK_FORM`,
  CLEAN_FORM: `CLEAN_FORM`,
  GET_REVIEWS: `GET_REVIEWS`,
  SHOW_ERROR: `SHOW_ERROR`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  CHANGE_FAVORITES: `CHANGE_FAVORITES`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: Action.CHANGE_CITY,
    payload: city
  }),

  showError: (error) => ({
    type: Action.SHOW_ERROR,
    payload: error,
  }),

  lockForm: (isLock) => ({
    type: Action.LOCK_FORM,
    payload: isLock,
  }),

  cleanForm: (isSent) => ({
    type: Action.CLEAN_FORM,
    payload: isSent,
  }),

  changeActiveOffer: (id) => ({
    type: Action.CHANGE_ACTIVE_OFFER,
    payload: id
  }),

  setSortType: (type) => ({
    type: Action.SET_SORT_TYPE,
    payload: type
  }),

  changeOffers: (offers) => ({
    type: Action.CHANGE_OFFERS,
    payload: offers
  }),

  changeOfferFavoriteStatus: (offer) => ({
    type: Action.CHANGE_OFFER_FAVORITE_STATUS,
    payload: offer
  }),

  changeLoadStatus: () => ({
    type: Action.CHANGE_LOAD_STATUS,
    payload: false
  }),

  getReviews: (reviews) => ({
    type: Action.GET_REVIEWS,
    payload: reviews
  }),

  changeFavorites: (list) => ({
    type: Action.CHANGE_FAVORITES,
    payload: list,
  })
};

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(RequestUrl.HOTELS)
      .then((response) => {
        dispatch(ActionCreator.changeOffers(response.data));
        dispatch(ActionCreator.changeCity(response.data[0].city.name));
        dispatch(ActionCreator.changeLoadStatus());
      })
      .catch((response) => {
        dispatch(ActionCreator.showError(Constants.ERROR_MESSAGE));
      });
  },

  loadFavorites: () => (dispatch, _, api) => {
    return api.get(RequestUrl.FAVORITE)
      .then(({data}) => {
        dispatch(ActionCreator.changeFavorites(data));
      });
  },

  addToFavorites: (id) => (dispatch, _, api) => {
    return api.post(`${RequestUrl.FAVORITE}/${id}/1`)
      .then(({data}) => {
        dispatch(ActionCreator.changeOfferFavoriteStatus(PlaceCardAdapter.parseOffer(data)));
      });
  },

  removeFromFavorite: (id) => (dispatch, _, api) => {
    return api.post(`${RequestUrl.FAVORITE}/${id}/0`)
      .then(({data}) => {
        dispatch(ActionCreator.changeOfferFavoriteStatus(PlaceCardAdapter.parseOffer(data)));
      });
  },

  loadReviews: (id) => {
    return (dispatch, _, api) => {
      return api.get(`${RequestUrl.COMMENTS}/${id}`)
        .then(({data}) => {
          dispatch(ActionCreator.getReviews(ReviewAdapter.parseReviews(data, id)));
        });
    };
  },

  sendReview: (id, review) => (dispatch, _, api) => {
    return api.post(`${RequestUrl.COMMENTS}/${id}`, review)
      .then(({data}) => {
        dispatch(ActionCreator.getReviews(ReviewAdapter.parseReviews(data, id)));
        dispatch(ActionCreator.lockForm(false));
        dispatch(ActionCreator.cleanForm(true));
        dispatch(ActionCreator.showError(``));
      })
      .catch(() => {
        dispatch(ActionCreator.lockForm(false));
        dispatch(ActionCreator.showError(Constants.ERROR_MESSAGE));
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
    case Action.CHANGE_ACTIVE_OFFER:
      return Object.assign({}, state, {activeOffer: action.payload});
    case Action.CHANGE_LOAD_STATUS:
      return Object.assign({}, state, {isLoading: action.payload});
    case Action.CHANGE_OFFERS:
      const parsedOffers = PlaceCardAdapter.parseOffers(action.payload);
      return Object.assign({}, state, {offers: parsedOffers});
    case Action.SHOW_ERROR:
      return Object.assign({}, state, {error: action.payload});
    case Action.CHANGE_FAVORITES:
      return Object.assign({}, state, {favorites: PlaceCardAdapter.parseOffers(action.payload)});
    case Action.GET_REVIEWS:
      return Object.assign({}, state, {reviews: action.payload});
    case Action.LOCK_FORM:
      return Object.assign({}, state, {isReviewSending: action.payload});
    case Action.CLEAN_FORM:
      return Object.assign({}, state, {isReviewSent: action.payload});
    case Action.SET_SORT_TYPE:
      return Object.assign({}, state, {typeSort: action.payload});
    case Action.CHANGE_OFFER_FAVORITE_STATUS:
      return Object
        .assign({}, state, {offers: getOffersWithReplacedFavorite(state.offers, action.payload)});
  }

  return state;
};

export {Action, Operation, reducer, ActionCreator};

import MockAdapter from "axios-mock-adapter";
import createApi from './../../api';
import {
  Action,
  ActionCreator,
  getOffersWithReplacedFavorite,
  initialState,
  Operation,
  reducer,
  RequestUrl
} from './data';
import Constants, {PageAddress, REQUEST, SortType} from "./../../constants";


describe(`Should make a correctly API`, () => {

  it(`load offers`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const offers = Operation.loadOffers();

    apiMock
      .onGet(PageAddress.HOTELS)
      .reply(REQUEST.STATUS_CODE.SUCCESS, {fake: true});
    return offers(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Action.CHANGE_OFFERS,
          payload: {fake: true},
        });
      });
  });

  it(`load reviews`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const reviews = Operation.loadReviews(1);
    const mockResponse = [{
      "id": 1,
      "user": {
        "id": 14,
        "is_pro": true,
        "name": `Corey`,
        "avatar_url": `avatar/5.jpg`
      },
      "rating": 5,
      "comment": `Some text`,
      "date": `2019-12-06T08:32:15.303Z`
    }];
    const mockData = {
      1: [
        {
          avatarUrl: `avatar/5.jpg`,
          comment: `Some text`,
          date: `December 2019`,
          id: 1,
          isPro: true,
          rating: 5,
          userName: `Corey`,
        }
      ]
    };

    apiMock
      .onGet(`${RequestUrl.COMMENTS}/1`)
      .reply(REQUEST.STATUS_CODE.SUCCESS, mockResponse);

    return reviews(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Action.GET_REVIEWS,
          payload: mockData,
        });
      });
  });

  it(`post review and return error when something went wrong`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const postReview = Operation.sendReview(1, {fake: true});

    apiMock
      .onPost(`${RequestUrl.COMMENTS}/1`)
      .networkError();
    return postReview(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Action.LOCK_FORM,
          payload: false,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: Action.SHOW_ERROR,
          payload: Constants.ERROR_MESSAGE,
        });
      });
  });

  it(`add to favorite`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const id = 1;
    const addToFavorite = Operation.addToFavorites(id);
    const offersFromServer = {
      "city": {
        "name": `Dusseldorf`,
        "location": {
          "latitude": 51.225402,
          "longitude": 6.776314,
          "zoom": 13
        },
      },
      "preview_image": `15.jpg`,
      "images": [
        `hotel/18.jpg`
      ],
      "title": `The house among olive `,
      "is_favorite": false,
      "is_premium": false,
      "rating": 4.7,
      "type": `apartment`,
      "bedrooms": 4,
      "max_adults": 8,
      "price": 362,
      "goods": [
        `Breakfast`
      ],
      "host": {
        "id": 25,
        "name": `Angelina`,
        "is_pro": true,
        "avatar_url": `img/avatar-angelina.jpg`
      },
      "description": `Some text`,
      "location": {
        "latitude": 51.205402,
        "longitude": 6.7613140000000005,
        "zoom": 16
      },
      "id": 1
    };
    const expectOfferAfterConvert = {
      id: 1,
      city: {
        name: `Dusseldorf`,
        location: [51.225402, 6.776314],
        zoom: 13,
      },
      price: 362,
      rating: 4.7,
      title: `The house among olive `,
      type: `apartment`,
      description: `Some text`,
      goods: [`Breakfast`],
      bedrooms: 4,
      isFavorite: false,
      isPremium: false,
      previewImage: `15.jpg`,
      maxAdults: 8,
      images: [`hotel/18.jpg`],
      host: {
        avatar: `img/avatar-angelina.jpg`,
        id: 25,
        isPro: true,
        name: `Angelina`,
      },
      location: {
        coordinates: [51.205402, 6.7613140000000005],
        zoom: 16,
      },
    };

    apiMock
      .onPost(`${RequestUrl.FAVORITE}/${id}/1`)
      .reply(REQUEST.STATUS_CODE.SUCCESS, offersFromServer);
    return addToFavorite(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toBeCalled();
        expect(dispatch).toBeCalledWith(
            {
              type: Action.CHANGE_OFFER_FAVORITE_STATUS,
              payload: expectOfferAfterConvert
            }
        );
      });
  });

  it(`remove from favorite`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const id = 1;
    const removeFromFavorite = Operation.removeFromFavorite(id);
    const offersFromServer = {
      "city": {
        "name": `Dusseldorf`,
        "location": {
          "latitude": 51.225402,
          "longitude": 6.776314,
          "zoom": 13
        },
      },
      "preview_image": `15.jpg`,
      "images": [
        `hotel/18.jpg`
      ],
      "title": `The house among olive `,
      "is_favorite": false,
      "is_premium": false,
      "rating": 4.7,
      "type": `apartment`,
      "bedrooms": 4,
      "max_adults": 8,
      "price": 362,
      "goods": [
        `Breakfast`
      ],
      "host": {
        "id": 25,
        "name": `Angelina`,
        "is_pro": true,
        "avatar_url": `img/avatar-angelina.jpg`
      },
      "description": `Some text`,
      "location": {
        "latitude": 51.205402,
        "longitude": 6.7613140000000005,
        "zoom": 16
      },
      "id": 1
    };
    const expectOfferAfterConvert = {
      id: 1,
      city: {
        name: `Dusseldorf`,
        location: [51.225402, 6.776314],
        zoom: 13,
      },
      price: 362,
      rating: 4.7,
      title: `The house among olive `,
      type: `apartment`,
      description: `Some text`,
      goods: [`Breakfast`],
      bedrooms: 4,
      isFavorite: false,
      isPremium: false,
      previewImage: `15.jpg`,
      maxAdults: 8,
      images: [`hotel/18.jpg`],
      host: {
        avatar: `img/avatar-angelina.jpg`,
        id: 25,
        isPro: true,
        name: `Angelina`,
      },
      location: {
        coordinates: [51.205402, 6.7613140000000005],
        zoom: 16,
      },
    };

    apiMock
      .onPost(`${PageAddress.FAVORITE}/${id}/0`)
      .reply(REQUEST.STATUS_CODE.SUCCESS, offersFromServer);
    return removeFromFavorite(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toBeCalled();
        expect(dispatch).toBeCalledWith(
            {
              type: Action.CHANGE_OFFER_FAVORITE_STATUS,
              payload: expectOfferAfterConvert
            }
        );
      });
  });


  it(`post review`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const postReview = Operation.sendReview(1, {fake: true});

    apiMock
      .onPost(`${RequestUrl.COMMENTS}/1`)
      .reply(REQUEST.STATUS_CODE.SUCCESS, {rating: 5, review: `OLOLOLO`});
    return postReview(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Action.LOCK_FORM,
          payload: false,
        });
      });
  });

  it(`load favorites`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const loadFavorites = Operation.loadFavorites();

    apiMock
      .onGet(PageAddress.FAVORITE)
      .reply(REQUEST.STATUS_CODE.SUCCESS, {fake: true});
    return loadFavorites(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toBeCalled();
        expect(dispatch).toBeCalledWith(
            {
              type: Action.CHANGE_FAVORITES,
              payload: {fake: true}
            }
        );
      });
  });

});

describe(`Reducer works correctly`, () => {
  it(`add loaded offers`, () => {
    const offersFromServer = [{
      id: 1,
      city: {
        name: ``,
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 1,
        }
      },
      price: 0,
      rating: 1,
      title: ``,
      type: ``,
      description: ``,
      goods: [``],
      bedrooms: ``,
      [`is_favorite`]: false,
      [`is_premium`]: false,
      [`preview_image`]: ``,
      [`max_adults`]: ``,
      images: [``],
      host: {
        [`avatar_url`]: ``,
        [`id`]: 1,
        [`is_pro`]: true,
        name: ``,
      },
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 1,
      },
    }];
    const expectOfferAfterConvert = [{
      id: 1,
      city: {
        name: ``,
        location: [0, 0],
        zoom: 1,
      },
      price: 0,
      rating: 1,
      title: ``,
      type: ``,
      description: ``,
      goods: [``],
      bedrooms: ``,
      isFavorite: false,
      isPremium: false,
      previewImage: ``,
      maxAdults: ``,
      images: [``],
      host: {
        avatar: ``,
        id: 1,
        isPro: true,
        name: ``,
      },
      location: {
        coordinates: [0, 0],
        zoom: 1,
      },
    }];
    const reducerDone = reducer(
        {offers: []},
        ActionCreator.changeOffers(offersFromServer)
    );

    expect(reducerDone).toEqual({
      offers: expectOfferAfterConvert,
    });
  });

  it(`set current city`, () => {
    const reducerDone = reducer(
        {currentCity: `Dusseldorf`},
        ActionCreator.changeCity(`Amsterdam`)
    );

    expect(reducerDone).toEqual({
      currentCity: `Amsterdam`
    });
  });

  it(`set loaded reviews`, () => {
    const reviewsFromServer = [{
      id: 0,
      comment: ``,
      date: `2019-06-01T10:38:39.844Z`,
      rating: 1,
      user: {
        name: ``,
        [`avatar_url`]: ``,
        [`is_pro`]: false,
      },
    }];
    const expectReviewsAfterConvert = {
      id: 0,
      comment: ``,
      date: `2019-06-01T10:38:39.844Z`,
      rating: 1,
      user: {
        [`avatar_url`]: ``,
        [`is_pro`]: false,
        name: ``
      }
    };
    const reducerDone = reducer(
        {
          reviews: {}
        },
        ActionCreator.getReviews(reviewsFromServer, 0)
    );

    expect(reducerDone).toEqual({
      reviews: [
        expectReviewsAfterConvert
      ],
    });

  });

  it(`set current id of Offer`, () => {
    const reducerDone = reducer(
        {activeOffer: 0},
        ActionCreator.changeActiveOffer(1)
    );

    expect(reducerDone).toEqual({
      activeOffer: 1
    });
  });

  it(`set sort type`, () => {
    const reducerDone = reducer(
        {typeSort: SortType.POPULAR},
        ActionCreator.setSortType(SortType.TOP_RATED)
    );

    expect(reducerDone).toEqual({
      typeSort: SortType.TOP_RATED
    });
  });

  it(`add new review`, () => {
    const reducerDone = reducer(
        {reviews: {}},
        ActionCreator.getReviews([{
          id: 1,
          comment: `hello`,
          date: `2019-06-01T10:38:39.844Z`,
          rating: 1,
          user: {
            name: `Serhii`,
            [`avatar_url`]: `img/foo`,
            [`is_pro`]: false,
          },
        }], 1)
    );

    expect(reducerDone).toEqual({
      reviews: [
        {
          "comment": `hello`,
          "date": `2019-06-01T10:38:39.844Z`,
          "id": 1,
          "rating": 1,
          "user": {
            "avatar_url": `img/foo`,
            "is_pro": false,
            "name": `Serhii`
          }
        }
      ]
    });
  });

  it(`set status sending review`, () => {
    const reducerDone = reducer(
        {isReviewSending: false},
        ActionCreator.lockForm(true)
    );

    expect(reducerDone).toEqual(
        {
          isReviewSending: true,
        }
    );
  });

  it(`set status whether sent review`, () => {
    const reducerDone = reducer(
        {isReviewSent: false},
        ActionCreator.cleanForm(true)
    );

    expect(reducerDone).toEqual(
        {
          isReviewSent: true,
        }
    );
  });

  it(`send error message`, () => {
    const reducerDone = reducer(
        {error: ``},
        ActionCreator.showError(`Something went wrong`)
    );

    expect(reducerDone).toEqual(
        {
          error: `Something went wrong`,
        }
    );
  });

  it(`add loaded favorites`, () => {
    const reducerDone = reducer(
        {favorites: []},
        ActionCreator.changeFavorites([
          {
            id: 0,
            city: {
              name: ``,
              location: {
                latitude: 0,
                longitude: 0,
                zoom: 1,
              }
            },
            price: 0,
            rating: 1,
            title: ``,
            type: ``,
            description: ``,
            goods: [``],
            bedrooms: ``,
            [`is_favorite`]: true,
            [`is_premium`]: false,
            [`preview_image`]: ``,
            [`max_adults`]: ``,
            images: [``],
            host: {
              [`avatar_url`]: ``,
              [`id`]: 1,
              [`is_pro`]: true,
              name: ``,
            },
            location: {
              latitude: 0,
              longitude: 0,
              zoom: 1,
            },
          }
        ])
    );

    expect(reducerDone).toEqual({
      favorites: [
        {
          id: 0,
          city: {
            name: ``,
            location: [0, 0],
            zoom: 1
          },
          price: 0,
          rating: 1,
          title: ``,
          type: ``,
          description: ``,
          goods: [``],
          bedrooms: ``,
          isFavorite: true,
          isPremium: false,
          previewImage: ``,
          maxAdults: ``,
          images: [``],
          host: {
            avatar: ``,
            id: 1,
            isPro: true,
            name: ``,
          },
          location: {
            coordinates: [0, 0],
            zoom: 1,
          },
        }
      ]
    });
  });

  it(`add from favorite`, () => {
    const reducerDone = reducer(
        {favorites: []},
        Operation.addToFavorites(
            {
              id: 0,
              city: {
                name: ``,
                location: {
                  latitude: 0,
                  longitude: 0,
                  zoom: 1,
                }
              },
              price: 0,
              rating: 1,
              title: ``,
              type: ``,
              description: ``,
              goods: [``],
              bedrooms: ``,
              [`is_favorite`]: true,
              [`is_premium`]: false,
              [`preview_image`]: ``,
              [`max_adults`]: ``,
              images: [``],
              host: {
                [`avatar_url`]: ``,
                id: 0,
                [`is_pro`]: false,
                name: ``,
              },
              location: {
                latitude: 0,
                longitude: 0,
                zoom: 1,
              },
            })
    );

    expect(reducerDone).toEqual({favorites: []});
  });

  it(`remove from favorite`, () => {
    const reducerDone = reducer(
        {favorites: []},
        Operation.removeFromFavorite(
            {
              id: 0,
              city: {
                name: ``,
                location: {
                  latitude: 0,
                  longitude: 0,
                  zoom: 1,
                }
              },
              price: 0,
              rating: 1,
              title: ``,
              type: ``,
              description: ``,
              goods: [``],
              bedrooms: ``,
              [`is_favorite`]: false,
              [`is_premium`]: true,
              [`preview_image`]: ``,
              [`max_adults`]: ``,
              images: [``],
              host: {
                [`avatar_url`]: ``,
                id: 0,
                [`is_pro`]: false,
                name: ``,
              },
              location: {
                latitude: 0,
                longitude: 0,
                zoom: 1,
              },
            })
    );

    expect(reducerDone).toEqual({favorites: []});
  });


  it(`return default state on UNKNOWN_TYPE`, () => {
    const reducerDone = reducer(
        initialState,
        {
          type: `UNKNOWN_TYPE`,
          payload: {unknownField: ``}
        }
    );

    expect(reducerDone).toEqual(initialState);
  });

  it(`should replace offer`, () => {
    const offers = [
      {
        id: 1,
        isFavorite: true,
      },
      {
        id: 0,
        isFavorite: false,
      }
    ];

    const offer = {
      id: 0,
      isFavorite: true,
    };
    const expectOffers = [
      {
        id: 1,
        isFavorite: true,
      },
      {
        id: 0,
        isFavorite: true,
      }
    ];
    const replacedOffer = getOffersWithReplacedFavorite(offers, offer);

    expect(replacedOffer).toEqual(expectOffers);
  });
});

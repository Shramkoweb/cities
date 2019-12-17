import MockAdapter from "axios-mock-adapter";

import createApi from "./../../api";
import {initialState, Operation, Action, reducer, ActionCreator} from "./user";
import {PageAddress, REQUEST} from "./../../constants";


describe(`Api works correctly`, () => {
  it(`correct post to login`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const authorization = Operation.sendAuthData({email: `shramko.web@yahoo.com`, password: 123});
    const mockUserData = {
      [`avatar_url`]: `some.img`,
      email: `shramko.web@yahoo.com`,
      id: 1,
      [`is_pro`]: true,
      name: `Serhii`
    };

    const receivedUserData = {
      avatar: `some.img`,
      email: `shramko.web@yahoo.com`,
      id: 1,
      isPro: true,
      name: `Serhii`
    };

    apiMock
      .onPost(PageAddress.LOGIN)
      .reply(REQUEST.STATUS_CODE.SUCCESS, mockUserData);

    return authorization(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Action.AUTHORIZATION,
          payload: receivedUserData,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: Action.REQUIRED_AUTHORIZATION,
          payload: false,
        });
      });
  });

  it(`correct get login`, () => {
    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const authorization = Operation.onCheckAuth();
    const mockUserData = {
      [`avatar_url`]: `some.img`,
      email: `shramko.web@yahoo.com`,
      id: 1,
      [`is_pro`]: true,
      name: `Serhii`
    };

    const receivedUserData = {
      avatar: `some.img`,
      email: `shramko.web@yahoo.com`,
      id: 1,
      isPro: true,
      name: `Serhii`
    };

    apiMock
      .onGet(PageAddress.LOGIN)
      .reply(REQUEST.STATUS_CODE.SUCCESS, mockUserData);

    return authorization(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: Action.AUTHORIZATION,
          payload: receivedUserData,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: Action.REQUIRED_AUTHORIZATION,
          payload: false,
        });
      });
  });
});

describe(`Reducer works correctly`, () => {
  it(`should change required authorization`, () => {
    const reducerDoneLogIn = reducer(
        {isAuthorizationRequired: false},
        ActionCreator.requireAuthorization(true)
    );

    expect(reducerDoneLogIn).toEqual({isAuthorizationRequired: true});
  });

  it(`should get correct user data`, () => {
    const userData = {
      id: ``,
      email: ``,
      name: ``,
      avatar: ``,
      isPro: ``,
    };
    const getUserData = reducer(
        {userData: {}},
        ActionCreator.authorization(userData)
    );

    expect(getUserData).toEqual({userData});
  });

  it(`Should return default state`, () => {
    const reducerDone = reducer(
        initialState,
        {
          type: `Unknown_ACTION`,
          payload: `some data`
        }
    );

    expect(reducerDone).toEqual(initialState);
  });

});

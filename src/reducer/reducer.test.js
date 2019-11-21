import {reducer} from "./index";

it(`reducer should correct change city`, () => {
  const reducerDone = reducer(
      {currentCity: `Dusseldorf`, offers: []},
      {type: `CHANGE_CITY`, payload: `Amsterdam`}
  );

  expect(reducerDone).toEqual({currentCity: `Amsterdam`, offers: []});
});

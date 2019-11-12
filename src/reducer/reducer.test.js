import {reducer} from "./reducer";

it(`reducer should correct change city`, () => {
  const reducerDone = reducer(
      {city: `Dusseldorf`, offers: []},
      {type: `CHANGE_CITY`, payload: `Amsterdam`}
  );

  expect(reducerDone).toEqual({city: `Amsterdam`, offers: []});
});

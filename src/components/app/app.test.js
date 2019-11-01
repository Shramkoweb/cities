import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {OFFERS} from "../../mocks/offers";

jest.mock(`../map/map.jsx`, () => jest.fn().mockReturnValue(null));

it(`App component render correct`, () => {
  const app = renderer
    .create(<App offers={OFFERS}/>)
    .toJSON();

  expect(app).toMatchSnapshot();
});

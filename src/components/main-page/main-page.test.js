import React from "react";
import renderer from "react-test-renderer";
import {OFFERS} from "../../mocks/offers";
import MainPage from "./main-page";

it(`MainPage component render correct`, () => {
  const app = renderer
    .create(<MainPage offers={OFFERS}/>)
    .toJSON();

  expect(app).toMatchSnapshot();
});

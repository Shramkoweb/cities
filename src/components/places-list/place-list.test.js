import React from "react";
import renderer from "react-test-renderer";
import {OFFERS} from "../../mocks/offers";
import PlacesList from "./places-list";

it(`App component render correct`, () => {
  const app = renderer
    .create(<PlacesList offers={OFFERS}/>)
    .toJSON();

  expect(app).toMatchSnapshot();
});

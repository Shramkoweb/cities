import React from "react";
import renderer from "react-test-renderer";
import {PlacesList} from "./places-list";
import {OFFERS} from "../../mocks/offers";

it(`PlacesList component render correct`, () => {
  const app = renderer
    .create(
        <PlacesList
          offers={OFFERS}
          onSelect={jest.fn()}
        />)
    .toJSON();

  expect(app).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog";
import {OFFERS} from "../../mocks/offers";

jest.mock(`../map/map.jsx`, () => jest.fn().mockReturnValue(null));
const citiesCoordinates = [[52.123123, 4.8123123], [52.21313, 4.9123123]];

it(`Catalog component render correct`, () => {
  const catalog = renderer
    .create(
        <Catalog
          offers={OFFERS}
          citiesCoordinates={citiesCoordinates}
        />)
    .toJSON();

  expect(catalog).toMatchSnapshot();
});

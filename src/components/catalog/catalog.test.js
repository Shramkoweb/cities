import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog";
import {OFFERS} from "../../mocks/offers";

it(`Catalog component render correct`, () => {
  const catalog = renderer
    .create(<Catalog offers={OFFERS} />)
    .toJSON();
  expect(catalog).toMatchSnapshot();
});

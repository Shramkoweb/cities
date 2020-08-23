import * as React from "react";
import * as renderer from "react-test-renderer";import {Catalog} from "./catalog";
import {OFFERS} from "../../mocks/offers";

jest.mock(`../map/map.tsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../tabs/tabs.tsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../sort/sort.tsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../places-list/places-list.tsx`, () => jest.fn().mockReturnValue(null));


it(`Catalog component render correct`, () => {
  const catalog = renderer
    .create(
      <Catalog
        currentCity={`NY`}
        offers={OFFERS}
        mapCoordinates={[]}
      />)
    .toJSON();

  expect(catalog).toMatchSnapshot();
});

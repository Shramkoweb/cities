import * as React from "react";
import * as renderer from "react-test-renderer";
import {Catalog} from "./catalog";
import {OFFERS} from "../../mocks/offers";


jest.mock(`../../index.tsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../map/map.tsx`);
jest.mock(`../tabs/tabs.tsx`);
jest.mock(`../sort/sort.tsx`);
jest.mock(`../places-list/places-list.tsx`);


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

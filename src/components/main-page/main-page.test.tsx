import * as React from "react";
import * as renderer from "react-test-renderer";

import MainPage from "./main-page";

jest.mock(`../../index.tsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../catalog/catalog.tsx`);
jest.mock(`../header/header.tsx`);

it(`MainPage component render correct`, () => {
  const app = renderer
    .create(<MainPage/>)
    .toJSON();

  expect(app).toMatchSnapshot();
});

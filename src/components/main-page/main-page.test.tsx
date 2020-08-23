import * as React from "react";
import * as renderer from "react-test-renderer";
import MainPage from "./main-page";

jest.mock(`../catalog/catalog.tsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../header/header.tsx`, () => jest.fn().mockReturnValue(null));

it(`MainPage component render correct`, () => {
  const app = renderer
    .create(<MainPage/>)
    .toJSON();

  expect(app).toMatchSnapshot();
});

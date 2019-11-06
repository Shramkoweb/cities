import React from "react";
import renderer from "react-test-renderer";
import {Tabs} from "./tabs";

it(`Tabs component render correct`, () => {
  const tabsTemplate = renderer.create(
      <Tabs/>
  ).toJSON();

  expect(tabsTemplate).toMatchSnapshot();
});

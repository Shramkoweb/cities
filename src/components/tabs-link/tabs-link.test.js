import React from "react";
import renderer from "react-test-renderer";
import {TabsLink} from "./tabs-link";

it(`Tab-link component render correct`, () => {
  const tabsTemplate = renderer.create(
      <TabsLink city={`NY`}/>
  ).toJSON();

  expect(tabsTemplate).toMatchSnapshot();
});

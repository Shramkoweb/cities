import React from "react";
import renderer from "react-test-renderer";
import {Tabs} from "./tabs";
import Constants from "../../constants";

jest.mock(`../tabs-link/tabs-link.jsx`, () => jest.fn().mockReturnValue(null));


it(`Tabs component render correct`, () => {
  const tabsTemplate = renderer.create(
      <Tabs cities={Constants.CITIES}/>
  ).toJSON();

  expect(tabsTemplate).toMatchSnapshot();
});

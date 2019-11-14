import React from "react";
import renderer from "react-test-renderer";
import TabsLink from "./tabs-link";

const city = `Paris`;
const currentCity = `Moscow`;
const handleClick = jest.fn();

it(`Tab-link component render correct`, () => {
  const tabsTemplate = renderer.create(
      <TabsLink
        city={city}
        changeCurrentCity={handleClick}
        onSelect={handleClick}
        activeElement={currentCity}
        id={`o-Paris`}
      />
  ).toJSON();

  expect(tabsTemplate).toMatchSnapshot();
});

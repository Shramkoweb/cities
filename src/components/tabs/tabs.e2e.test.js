import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Tabs} from "./tabs.jsx";
import Constants from "../../constants";

Enzyme.configure({adapter: new Adapter()});

describe(`Tabs component work correct`, () => {
  const cities = Constants.CITIES;
  const onSelect = jest.fn();
  const changeCurrentCity = jest.fn();

  const tabsComponent = mount(
      <Tabs
        cities={cities}
        onSelect={onSelect}
        activeElement={`Paris`}
        changeCurrentCity={changeCurrentCity}
      />
  );

  it(`Tabs render with correct number of cities`, () => {
    expect(tabsComponent.find(`.locations__item`)).toHaveLength(cities.length);
  });
});

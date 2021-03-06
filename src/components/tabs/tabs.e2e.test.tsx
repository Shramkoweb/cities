import * as React from "react";
import * as Enzyme from 'enzyme';
import {mount} from 'enzyme';
import * as Adapter from "enzyme-adapter-react-16";
import {Tabs} from "./tabs";
import Constants from "../../constants";

Enzyme.configure({adapter: new Adapter()});

describe(`Tabs component work correct`, () => {
  const cities = Constants.CITIES;
  const onSelect = jest.fn();
  const changeCurrentCity = jest.fn();

  const tabsComponent = mount(
    <Tabs
      activeElement={`Paris`}
      changeCurrentCity={changeCurrentCity}
      cities={cities}
      currentCity={`Paris`}
      onSelect={onSelect}
    />
  );

  it(`Tabs render with correct number of cities`, () => {
    expect(tabsComponent.find(`.locations__item`)).toHaveLength(cities.length);
  });
});

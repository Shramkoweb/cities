import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {TabsLink} from "./tabs-link";

Enzyme.configure({adapter: new Adapter()});

const city = `Paris`;
const currentCity = `Moscow`;
const handleClick = jest.fn();

it(`Should call callback on click to the link`, () => {
  const tabElement = shallow(
      <TabsLink
        currentCity={currentCity}
        city={city}
        changeCity={handleClick}
      />
  );

  const link = tabElement.find(`.locations__item-link`);
  link.simulate(`click`, {
    preventDefault() {
    }
  });

  expect(handleClick).toHaveBeenCalled();
  expect(handleClick).toHaveBeenCalledWith(city);
});

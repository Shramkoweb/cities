import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import StarRating from "./star-rating.jsx";

configure({adapter: new Adapter()});

it(`Rating should render correctly`, () => {
  const option = shallow(<StarRating
    onInputChange={jest.fn()}
    rating={`5`}
  />);

  expect(option).toMatchSnapshot();
});

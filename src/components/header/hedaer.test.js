import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";

it(`Header component render correct`, () => {
  const header = renderer
    .create(<Header user={`shramko.serhii@gmail.com`}/>)
    .toJSON();
  expect(header).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";

import Sort from "./sort";

it(`Sort component render correct`, () => {
  const sortTemplate = renderer
    .create(<Sort/>)
    .toJSON();

  expect(sortTemplate).toMatchSnapshot();
});

import * as React from "react";
import * as renderer from "react-test-renderer";

import Option from "./option";

it(`Goods component render correct`, () => {

  const component = renderer
    .create(<Option />)
    .toJSON();

  expect(component).toMatchSnapshot();
});

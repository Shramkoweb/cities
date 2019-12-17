import React from "react";
import Enzyme, {render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import {App} from "./app";
jest.mock(`../../index.js`, () => jest.fn().mockReturnValue(null));

Enzyme.configure({adapter: new Adapter()});

it(`Is App render`, () => {
  const tree = render((<App
    isAuthorizationRequired={false}
    isLoading={true}
    onCheckAuth={jest.fn()}
    isOfferExist={jest.fn()}
    isError={``}
  />));

  expect(toJson(tree)).toMatchSnapshot();
});

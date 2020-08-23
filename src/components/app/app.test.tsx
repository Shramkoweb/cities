import * as React from "react";
import * as Enzyme from "enzyme";
import {render} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

import {App} from "./app";

jest.mock(`../../index.tsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../../index.tsx`, () => jest.fn().mockReturnValue(null));

Enzyme.configure({adapter: new Adapter()});

it(`Is App render`, () => {
  const tree = render((<App
    isAuthorizationRequired={false}
    isLoading={true}
    onCheckAuth={jest.fn()}
    isError={``}
  />));

  expect(toJson(tree)).toMatchSnapshot();
});

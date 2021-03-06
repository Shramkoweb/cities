import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Sign} from './sign';

jest.mock(`../sign-form/sign-form.tsx`, () => jest.fn().mockReturnValue(null));

configure({adapter: new Adapter()});

it(`Sign in page renders correctly`, () => {
  const signIn = shallow(<Sign currentCity={`Paris`}/>);

  expect(signIn).toMatchSnapshot();
});

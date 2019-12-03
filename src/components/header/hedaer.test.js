import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";

it(`Header component render correct`, () => {
  const userMock = {
    avatar: `static/avatar/10.jpg`,
    email: `Shramko.web@yahoo.com`,
    id: 13,
    isPro: false,
    name: `Shramko.web`,
  };

  const header = renderer
    .create(<Header userData={userMock} isAuthorizationRequired={false}/>)
    .toJSON();

  expect(header).toMatchSnapshot();
});

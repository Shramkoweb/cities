import React from "react";
import renderer from "react-test-renderer";
import PageLayout from "./page-layout";

it(`PageLayout component render correct`, () => {
  const layout = renderer
    .create(<PageLayout pageClasses={[`page`, `page--gray`, `page--main`]} />)
    .toJSON();

  expect(layout).toMatchSnapshot();
});

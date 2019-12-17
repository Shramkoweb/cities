import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatalogEmpty from "./catalog-empty";

configure({adapter: new Adapter()});

it(`Empty main page renders correctly`, () => {
  const EmptyCatalog = shallow(
      <CatalogEmpty currentCity={`Kiev`}/>
  );

  expect(EmptyCatalog).toMatchSnapshot();
});

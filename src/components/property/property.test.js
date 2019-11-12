import React from "react";
import renderer from "react-test-renderer";
import Property from "./property";

it(`Property render is correct`, () => {
  const propertyComponent = renderer
    .create(
        <Property
          rating={3.4}
          isPremium={true}
          price={123}
          title={`Some title`}
        />
    )
    .toJSON();

  expect(propertyComponent).toMatchSnapshot();
});

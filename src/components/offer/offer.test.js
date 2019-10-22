import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer";

it(`Offer component render correct`, () => {
  const offer = renderer
    .create(<Offer
      previewPhoto={`img/apartment-01.jpg`}
      isFavorite={true}
      isPremium={true}
      price={120}
      type={`Apartment`}
      rating={30}
      title={`Some text`}
      onOfferTitleClick={jest.fn()}/>)
    .toJSON();

  expect(offer).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";

it(`Offer component render correct`, () => {
  const offer = renderer
    .create(<PlaceCard
      previewPhoto={`img/apartment-01.jpg`}
      isFavorite={true}
      isPremium={true}
      price={120}
      type={`Apartment`}
      rating={30}
      title={`Some text`}
      onCardClick={jest.fn()}/>)
    .toJSON();

  expect(offer).toMatchSnapshot();
});

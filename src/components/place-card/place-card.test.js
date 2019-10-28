import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";

const offerData = {
  id: 834576,
  title: `Beautiful & luxurious apartment at great location`,
  previewPhoto: `img/apartment-01.jpg`,
  isPremium: true,
  isFavorite: true,
  price: 120,
  rating: 43,
  type: `Apartment`
};

it(`PlaceCard component render correct`, () => {
  const placeCardComponent = renderer
    .create(<PlaceCard
      offer={offerData}
      onCardHover={jest.fn()}/>)
    .toJSON();

  expect(placeCardComponent).toMatchSnapshot();
});

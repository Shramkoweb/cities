import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";

const offerData = {
  id: 834576,
  isFavorite: true,
  isPremium: true,
  previewPhoto: `img/apartment-01.jpg`,
  price: 120,
  rating: 43,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
};

it(`PlaceCard component render correct`, () => {
  const placeCardComponent = renderer
    .create(<PlaceCard
      offer={offerData}
      onCardHover={jest.fn()}/>)
    .toJSON();

  expect(placeCardComponent).toMatchSnapshot();
});

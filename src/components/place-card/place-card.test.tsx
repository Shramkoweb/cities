import * as React from "react";
import * as renderer from "react-test-renderer";

import {PlaceCard} from "./place-card";

jest.mock(`react-router-dom`);
jest.mock(`../../index.tsx`, () => jest.fn().mockReturnValue(null));


const offerData = {
  id: 834576,
  isFavorite: true,
  isPremium: true,
  previewImage: `img/apartment-01.jpg`,
  price: 120,
  rating: 43,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
};

it(`PlaceCard component render correct`, () => {
  const placeCardComponent = renderer
    .create(<PlaceCard
      isAuthRequire={false}
      loadFavorites={jest.fn()}
      offer={offerData}
      onAddFavorite={jest.fn()}
      onCardHover={jest.fn()}
      onRemoveFavorite={jest.fn()}
    />)
    .toJSON();

  expect(placeCardComponent).toMatchSnapshot();
});

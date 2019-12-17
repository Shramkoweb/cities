import React from "react";
import renderer from "react-test-renderer";
import {Property} from "./property";

jest.mock(`../header/header.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../review-list/review-list.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../map/map.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../places-list/places-list.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../../index.js`, () => jest.fn().mockReturnValue(null));


it(`Property render is correct`, () => {
  const mockOffer = {
    isPremium: true,
    isFavorite: false,
    title: `Waterfront with extraordinary view`,
    rating: 3,
    price: 1234,
    city: {
      name: `Moscow`
    },
    images: [],
    goods: [`Washer`, `Towels`],
    bedrooms: 4,
    type: `room`,
    maxAdults: 1,
    host: {
      name: `Serhii`,
      isPro: false,
      avatar: ``
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
  };

  const propertyComponent = renderer
    .create(
        <Property
          currentCity={`Paris`}
          currentOffer={mockOffer}
          id={1}
          isAuthorized={false}
          onSetCurrentCity={jest.fn()}
          nearbyOffers={[]}
          nearbyOffersCoordinates={[]}
          onAddFavorite={jest.fn()}
          onRemoveFavorite={jest.fn()}
        />
    )
    .toJSON();

  expect(propertyComponent).toMatchSnapshot();
});

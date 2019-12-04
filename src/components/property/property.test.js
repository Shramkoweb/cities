import React from "react";
import renderer from "react-test-renderer";
import {Property} from "./property";

jest.mock(`../header/header.jsx`, () => jest.fn().mockReturnValue(null));


it(`Property render is correct`, () => {
  const mockOffer = {
    isPremium: true,
    isFavorite: false,
    title: `Waterfront with extraordinary view`,
    rating: 3,
    price: 1234,
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
          id={1}
          currentOffer={mockOffer}
        />
    )
    .toJSON();

  expect(propertyComponent).toMatchSnapshot();
});

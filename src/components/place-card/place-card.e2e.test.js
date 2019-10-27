import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

Enzyme.configure({adapter: new Adapter()});

it(`check hover on PlaceCard & called with correct argument`, () => {
  const onPlaceCardHover = jest.fn();
  const offer = {
    id: 834576,
    title: `Beautiful & luxurious apartment at great location`,
    previewPhoto: `img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: true,
    price: 120,
    rating: 43,
    type: `Apartment`
  };

  const placeCardComponent = shallow(
      <PlaceCard
        offer={offer}
        onCardHover={onPlaceCardHover}
      />
  );

  const placeCard = placeCardComponent.find(`.cities__place-card`);
  placeCard.simulate(`mouseEnter`);

  expect(onPlaceCardHover).toHaveBeenCalled();
  expect(onPlaceCardHover).toHaveBeenCalledWith(offer.id);
});

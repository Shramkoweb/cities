import * as React from "react";
import * as Enzyme from "enzyme"
import {shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card";

Enzyme.configure({adapter: new Adapter()});

jest.mock(`../../index.tsx`, () => jest.fn().mockReturnValue(null));


describe(`PlaceCard callbacks are called correct`, () => {
  const onPlaceCardHover = jest.fn();
  const offer = {
    id: 834576,
    isFavorite: true,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 43,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  };
  const placeCardComponent = shallow(
    <PlaceCard
      isAuthRequire={false}
      onFavoriteButtonClick={jest.fn()}
      loadFavorites={jest.fn()}
      offer={offer}
      onAddFavorite={jest.fn()}
      onCardHover={onPlaceCardHover}
      onRemoveFavorite={jest.fn()}
      onSelect={jest.fn()}
    />
  );
  const placeCard = placeCardComponent.find(`.cities__place-card`);

  it(`сallbacks are called 3 times`, () => {
    placeCard.simulate(`mouseEnter`);
    placeCard.simulate(`mouseEnter`);
    placeCard.simulate(`mouseEnter`);

    expect(onPlaceCardHover).toHaveBeenCalledTimes(3);
  });

  it(`check hover on PlaceCard & called with correct argument`, () => {
    placeCard.simulate(`mouseEnter`);

    expect(onPlaceCardHover).toHaveBeenCalled();
    expect(onPlaceCardHover).toHaveBeenCalledWith(offer.id);
  });
});

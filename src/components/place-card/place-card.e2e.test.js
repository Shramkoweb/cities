import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

Enzyme.configure({adapter: new Adapter()});

it(`check hover on Card & called with correct argument`, () => {
  const onTitleClick = jest.fn();
  const cardId = 987;

  const placeCardComponent = shallow(
      <PlaceCard
        previewPhoto={`img/apartment-01.jpg`}
        id={cardId}
        isFavorite={true}
        isPremium={true}
        price={120}
        type={`Apartment`}
        rating={30}
        title={`Some text`}
        onCardClick={onTitleClick}
      />
  );

  const placeCard = placeCardComponent.find(`.cities__place-card`);
  placeCard.simulate(`mouseEnter`);

  expect(onTitleClick).toHaveBeenCalled();
  expect(onTitleClick).toHaveBeenCalledWith(cardId);
});

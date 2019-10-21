import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offer from "./offer";

Enzyme.configure({adapter: new Adapter()});

it(`check click callback on Offer title`, () => {
  const onTitleClick = jest.fn();

  const offerComponent = shallow(
      <Offer
        img={`img/apartment-01.jpg`}
        price={120}
        type={`Apartment`}
        rating={30}
        placeName={`Some text`}
        onOfferTitleClick={onTitleClick}
      />
  );

  const offerTitle = offerComponent.find(`.place-card__name`);
  offerTitle.simulate(`click`);

  expect(onTitleClick).toHaveBeenCalled();
});

import React from 'react';
import renderer from 'react-test-renderer';
import Offer from "./offer";

it(`Offer component render correct`, () => {
  const offer = renderer
  .create(<Offer img={`img/apartment-01.jpg`} price={120} type={`Apartment`} rating={30} placeName={`Some text`}/>)
  .toJSON();
  expect(offer).toMatchSnapshot();
});

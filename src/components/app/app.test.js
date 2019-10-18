import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app";

const OFFERS = [
  {
    placeName: `Beautiful & luxurious apartment at great location`,
    img: `img/apartment-01.jpg`,
    price: 120,
    rating: 43,
    type: `Apartment`
  },
  {
    placeName: `Wood and stone place`,
    img: `img/apartment-02.jpg`,
    price: 80,
    rating: 12,
    type: `Private room`
  },
  {
    placeName: `Canal View Prinsengracht`,
    img: `img/apartment-03.jpg`,
    price: 132,
    rating: 66,
    type: `Apartment`
  },
  {
    placeName: `Nice, cozy, warm big bed apartment`,
    img: `img/apartment-02.jpg`,
    price: 180,
    rating: 100,
    type: `Apartment`
  },
];

it(`App component render correct`, () => {
  const app = renderer
  .create(<App offers={OFFERS}/>)
  .toJSON();
  expect(app).toMatchSnapshot();
});

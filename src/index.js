import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const rootElement = document.querySelector(`#root`);

const init = () => {
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
  ReactDOM.render(
      <App
        offers={OFFERS}
      />,
      rootElement
  );
};

init();

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
      rating: 93,
      type: `Apartment`
    },
    {
      placeName: `Beautiful & luxurious apartment at great location`,
      img: `img/apartment-01.jpg`,
      price: 80,
      rating: 80,
      type: `Private room`
    },
    {
      placeName: `Beautiful & luxurious apartment at great location`,
      img: `img/apartment-01.jpg`,
      price: 132,
      rating: 85,
      type: `Apartment`
    },
    {
      placeName: `Beautiful & luxurious apartment at great location`,
      img: `img/apartment-01.jpg`,
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

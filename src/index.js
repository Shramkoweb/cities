import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const rootElement = document.querySelector(`#root`);

const init = () => {

  const PLACE_NAMES = [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`
  ];

  ReactDOM.render(
      <App
        placeNames={PLACE_NAMES}
      />,
      rootElement
  );
};

init();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {OFFERS} from "./components/mocks";

const rootElement = document.querySelector(`#root`);

const init = () => {
  ReactDOM.render(
      <App
        offers={OFFERS}
      />,
      rootElement
  );
};

init();

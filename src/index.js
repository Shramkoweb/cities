import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {OFFERS} from "./components/constants";

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

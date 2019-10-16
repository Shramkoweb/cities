import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const rootElement = document.querySelector(`#root`);

const init = () => {
  ReactDOM.render(
      <App/>,
      rootElement
  );
};

init();

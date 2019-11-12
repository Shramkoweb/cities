import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer/reducer";
import App from "./components/app/app";
import {OFFERS} from "./mocks/offers";

const rootElement = document.querySelector(`#root`);
const store = createStore(reducer);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App offers={OFFERS}/>,
      </Provider>,
      rootElement
  );
};

init();

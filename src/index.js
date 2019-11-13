import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer/reducer";
import App from "./components/app/app";

const rootElement = document.querySelector(`#root`);
const store = createStore(reducer);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>,
      </Provider>,
      rootElement
  );
};

init();

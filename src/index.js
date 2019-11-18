import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {compose} from "recompose";
import {Provider} from "react-redux";
import {Operation, reducer} from "./reducer/reducer";
import App from "./components/app/app";

const rootElement = document.querySelector(`#root`);
const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

// store.dispatch(Operation.loadOffers());

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>,
      </Provider>,
      rootElement
  );
};

init();

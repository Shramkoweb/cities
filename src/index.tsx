import * as React from "react";
import * as ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {createBrowserHistory} from "history";
import {Router} from "react-router-dom";
import {compose} from "recompose";
import {Provider} from "react-redux";

import App from "./components/app/app";
import createAPI from "./api";
import reducer from "./reducer/reducer";
import {Operation} from "./reducer/data/data";
import {PageAddress} from "./constants";

const rootElement = document.querySelector(`#root`);
const history = createBrowserHistory();

declare const __REDUX_DEVTOOLS_EXTENSION__: () => any;


const init = () => {
  const api = createAPI(() => history.push(PageAddress.LOGIN));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          __REDUX_DEVTOOLS_EXTENSION__ ? __REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );


  store.dispatch(Operation.loadOffers());

  ReactDOM.render(
      <Router history={history}>
        <Provider store={store}>
          <App/>
        </Provider>
      </Router>,
      rootElement
  );
};

init();

export {history};

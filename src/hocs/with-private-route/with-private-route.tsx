import * as React from "react";
import {Redirect} from "react-router-dom";

const withPrivateRoute = (isAuthRequire, URL = `/`) => (Component) => {
  const WithPrivateRoute = (props) => {
    return isAuthRequire ? <Redirect to={URL}/> : <Component {...props}/>;
  };

  return WithPrivateRoute;
};

export default withPrivateRoute;

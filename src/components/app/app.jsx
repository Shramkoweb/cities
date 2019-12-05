import React from "react";
import {connect} from "react-redux";
import {Route, Switch, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import {getAuthorizationStatus} from "../../reducer/user/selector";
import Sign from "../sign/sign";
import {URL_ADDRESS} from "../../constants";

const App = () => {
  return (
    <Switch>
      <Route path={URL_ADDRESS.MAIN} exact component={MainPage}/>
      <Route path={URL_ADDRESS.LOGIN} exact component={Sign}/>
      <Redirect from='*' to={URL_ADDRESS.MAIN} />
    </Switch>
  );
};

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: getAuthorizationStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);

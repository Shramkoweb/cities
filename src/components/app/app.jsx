import React from "react";
import {connect} from "react-redux";
import {Route, Switch, Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import {getAuthorizationStatus} from "../../reducer/user/selector";
import Sign from "../sign/sign";
import {REQUEST_URL as Page} from "../../constants";

const App = (props) => {
  const {isAuthorizationRequired} = props;

  return (
    <Switch>
      <Route path="/" exact component={MainPage}/>
      <Route path={Page.LOGIN} exact component={Sign}/>
      <Redirect from='*' to='/'/>
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

import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import Sign from "../sign/sign";
import {getAuthorizationStatus} from "../../reducer/user/selector";

const App = (props) => {
  const {isAuthorizationRequired} = props;

  return (
    <>
      {!isAuthorizationRequired ? <MainPage/> : <Sign/>};
    </>
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

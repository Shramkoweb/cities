import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MainPage from "../main-page/main-page";

const App = (props) => {
  const {offers} = props;

  return (
    <MainPage
      offers={offers}
    />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => Object.assign({}, {
  city: state.city,
});

export {App};
export default connect(mapStateToProps)(App);

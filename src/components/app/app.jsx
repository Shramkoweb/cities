import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import {connect} from "react-redux";


const App = (props) => {
  const {offers} = props;
  const citiesCoordinates = offers.map((it) => it.coordinates);

  return (
    <MainPage
      offers={offers}
      citiesCoordinates={citiesCoordinates}
    />
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
});

export {App};

export default connect(mapStateToProps)(App);

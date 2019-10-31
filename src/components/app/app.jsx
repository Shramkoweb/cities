import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";


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

export default App;

import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import leaflet from 'leaflet';


const App = (props) => {
  const {offers} = props;
  const citiesCoordinates = offers.map((it) => it.coordinates);

  return (
    <MainPage offers={offers} citiesCoordinates={citiesCoordinates} leaflet={leaflet}/>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;

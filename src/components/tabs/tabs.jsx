import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer/reducer";
import TabsLink from "../tabs-link/tabs-link";

const Tabs = (props) => {
  const {cities, changeCurrentCity, currentCity} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, index) =>
            <TabsLink
              key={`${index}-${city}`}
              city={city}
              currentCity={currentCity}
              changeCity={changeCurrentCity}
            />)}
        </ul>
      </section>
    </div>
  );
};

Tabs.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeCurrentCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  currentCity: state.currentCity
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity: (city) => dispatch(ActionCreator.changeCity(city))
});

export {Tabs};
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);

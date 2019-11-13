import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer/reducer";
import TabsLink from "../tabs-link/tabs-link";

const Tabs = (props) => {
  const {cities, changeCurrentCity, onSelect, active} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, index) =>
            <TabsLink
              key={index + city}
              city={city}
              active={active}
              changeCity={changeCurrentCity}
              onSelect={onSelect}
            />)}
        </ul>
      </section>
    </div>
  );
};

Tabs.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeCurrentCity: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  cities: state.citiesList
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity: (city) => dispatch(ActionCreator.changeCity(city))
});

export {Tabs};
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);

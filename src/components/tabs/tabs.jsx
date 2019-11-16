import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer/reducer";
import TabsLink from "../tabs-link/tabs-link";

const Tabs = (props) => {
  const {
    activeElement,
    changeCurrentCity,
    cities,
    onSelect,
  } = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, index) =>
            <TabsLink
              key={`${index}-${city}`}
              id={`${index}-${city}`}
              city={city}
              onSelect={onSelect}
              activeElement={activeElement || `0-Amsterdam`} // TODO возможно стоит придумать что-то лучше
              changeCurrentCity={changeCurrentCity}
            />)}
        </ul>
      </section>
    </div>
  );
};

Tabs.propTypes = {
  activeElement: PropTypes.string,
  changeCurrentCity: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity: (city) => dispatch(ActionCreator.changeCity(city))
});

export {Tabs};
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);

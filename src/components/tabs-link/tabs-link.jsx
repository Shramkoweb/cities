import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const TabsLink = (props) => {
  const {city, currentCity, changeCity} = props;
  const activeClassName = currentCity === city ? `tabs__item--active` : ``;

  const onTabClick = (evt) => {
    evt.preventDefault();

    changeCity(city);
  };

  return (
    <li className="locations__item">
      <a
        onClick={onTabClick}
        className={`locations__item-link tabs__item ${activeClassName}`}
        href="#"
      >
        <span>{city}</span>
      </a>
    </li>
  );
};

TabsLink.propTypes = {
  city: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.city
});

export {TabsLink};
export default connect(mapStateToProps)(TabsLink);

import React from "react";
import PropTypes from "prop-types";

const TabsLink = (props) => {
  const {city, changeCity, onSelect, active} = props;
  const activeClassName = city === active ? `tabs__item--active` : ``;

  const onTabClick = (evt) => {
    evt.preventDefault();

    onSelect(city);
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
  changeCity: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired
};

export default TabsLink;

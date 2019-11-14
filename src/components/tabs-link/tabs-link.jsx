import React from "react";
import PropTypes from "prop-types";

const TabsLink = (props) => {
  const {city, changeCurrentCity, onSelect, activeElement, id} = props;
  const activeClassName = activeElement === id ? `tabs__item--active` : ``;

  const onTabClick = (evt) => {
    evt.preventDefault();

    onSelect(id);
    changeCurrentCity(city);
  };

  return (
    <li className="locations__item">
      <a
        onClick={onTabClick}
        className={`locations__item-link tabs__item ${activeClassName}`}
        href="#"
        id={id}
      >
        <span>{city}</span>
      </a>
    </li>
  );
};

TabsLink.propTypes = {
  city: PropTypes.string.isRequired,
  changeCurrentCity: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  activeElement: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default TabsLink;

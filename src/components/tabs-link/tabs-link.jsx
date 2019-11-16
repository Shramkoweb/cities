import React from "react";
import PropTypes from "prop-types";

const TabsLink = (props) => {
  const {
    activeElement,
    changeCurrentCity,
    city,
    id,
    onSelect,
  } = props;

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
  activeElement: PropTypes.string.isRequired,
  changeCurrentCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TabsLink;

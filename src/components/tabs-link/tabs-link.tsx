import * as React from "react";

const TabsLink = (props) => {
  const {
    activeElement,
    changeCurrentCity,
    city,
    onSelect,
  } = props;

  const activeClassName = activeElement === city ? `tabs__item--active` : ``;

  const onTabClick = (evt) => {
    evt.preventDefault();

    onSelect(city);
    changeCurrentCity(city);
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

export default TabsLink;

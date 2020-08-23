import * as React from "react";

const Option = (props) => {
  const {
    isSelected,
    name,
    onSelectOption,
    onSetTypeSort,
    sortType,
  } = props;

  const onOptionClick = () => {
    onSelectOption(sortType, name);
    onSetTypeSort(sortType);
  };

  return (
    <li
      className={`${isSelected ? `places__option--active` : ``} places__option`}
      onClick={onOptionClick}
      tabIndex={0}
      data-value={sortType}
    >
      {name}
    </li>
  );
};

export default Option;

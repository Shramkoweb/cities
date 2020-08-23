import * as React from "react";

const Goods = ({goods}) => {
  return (
    <ul className="property__inside-list">{
      goods.map((item, index) => (
        <li key={`"inside-item-${index}`} className="property__inside-item">
          {item}
        </li>
      ))
    }</ul>
  );
};

export default Goods;

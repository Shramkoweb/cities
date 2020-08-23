import * as React from "react";
import {connect} from "react-redux";

import PlaceCard from "../place-card/place-card";
import {ActionCreator} from "../../reducer/data/data";

const PlacesList = (props) => {
  const {offers, changeActiveOffer} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        <PlaceCard
          key={offer.id}
          offer={offer}
          onCardHover={changeActiveOffer}
        />)}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveOffer: (id) => dispatch(ActionCreator.changeActiveOffer(id))
});

export {PlacesList};
export default connect(null, mapDispatchToProps)(PlacesList);

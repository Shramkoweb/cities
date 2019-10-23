import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";

export default class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null
    };

    this.cardMouseHandler = this.cardMouseHandler.bind(this);
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <PlaceCard
            key={offer.id}
            isFavorite={offer.isFavorite}
            previewPhoto={offer.previewPhoto}
            price={offer.price}
            isPremium={offer.isPremium}
            type={offer.type}
            rating={offer.rating}
            title={offer.title}
            onOfferTitleClick={this.cardMouseHandler}
          />)}
      </div>
    );
  }

  cardMouseHandler(evt) {
    this.setState({
      hoveredCard: evt.currentTarget
    });
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};


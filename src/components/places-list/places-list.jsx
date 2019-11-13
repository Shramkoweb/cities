import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PlaceCard from "../place-card/place-card";

export class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null
    };

    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(id) {
    this.setState({
      hoveredCard: id
    });
  }

  render() {
    const {offers, onSelect} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <PlaceCard
            key={offer.id}
            offer={offer}
            onSelect={onSelect}
            onCardHover={this.handleCardHover}
          />)}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers.filter((offer) => {
    return offer.city === state.city;
  })
});


export {mapStateToProps};
export default connect(mapStateToProps)(PlacesList);

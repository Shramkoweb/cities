import React from "react";
import PropTypes from "prop-types";

export default class PlaceCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this._cardHoverHandler = this._cardHoverHandler.bind(this);
  }

  getMarkMarkup(isMarked) {
    if (isMarked) {
      return (
        <div className="place-card__mark"><span>Premium</span></div>
      );
    }
    return ``;
  }

  _cardHoverHandler() {
    console.log(this)
    const {onCardClick, id} = this.props;
    onCardClick(id);
  }

  render() {
    const {id, previewPhoto, price, isPremium, rating, title, type} = this.props;

    return (
      <article id={id} className="cities__place-card place-card" onMouseEnter={this._cardHoverHandler}>
        {this.getMarkMarkup(isPremium)}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src={previewPhoto}
              width="260"
              height="200"
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"/>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${rating}%`}}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  id: PropTypes.number,
  previewPhoto: PropTypes.string.isRequired,
  isPremium: PropTypes.bool,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired
};

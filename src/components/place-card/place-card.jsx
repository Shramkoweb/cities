import React from "react";
import PropTypes from "prop-types";
import {convertFloatToPercentage} from "../../utils";

const PlaceCard = (props) => {
  const {offer, onCardHover} = props;
  const {id, previewPhoto, price, isPremium, rating, title, type} = offer;

  const onCardMouseEnter = () => {
    onCardHover(id);
  };

  const ratingPercentage = `${convertFloatToPercentage(rating)}%`;

  return (
    <article
      id={id}
      className="cities__place-card place-card"
      onMouseEnter={onCardMouseEnter}
    >

      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}

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
            <span style={{width: ratingPercentage}}/>
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
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewPhoto: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
  onCardHover: PropTypes.func.isRequired
};

export default PlaceCard;

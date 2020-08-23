import * as React from "react";

import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "recompose";

import {ActionCreator} from "../../reducer/data/data";
import CardPlace from "../place-card/place-card";
import {PageAddress} from "../../constants";

interface FavoritesListProps {
  favorites: any,
  cities: any,
  city: any,
  history: any,
  onChangeCity: (city: any) => void,
}

class FavoritesList extends React.PureComponent<FavoritesListProps> {
  constructor(props) {
    super(props);

    this._handelClickCity = this._handelClickCity.bind(this);
  }

  _handelClickCity(evt) {
    evt.preventDefault();
    const {onChangeCity, history} = this.props;
    const city = evt.currentTarget.getAttribute(`data-city`);

    onChangeCity(city);
    history.push(PageAddress.MAIN);
  }

  render() {
    const {favorites, cities} = this.props;

    return (
      <ul className="favorites__list" aria-live="polite" role="status">
        {
          cities.map((group) => {
            return <li key={group} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <button
                    type="button"
                    onClick={this._handelClickCity}
                    data-city={group}
                    className="locations__item-link"
                  >
                    <span>{group}</span>
                  </button>
                </div>
              </div>
              <div className="favorites__places" aria-live="polite" role="status">
                {favorites[group].map((offer) => {
                  return <CardPlace
                    onCardHover={() => {
                    }}
                    key={offer.id}
                    offer={offer}
                  />;
                })}
              </div>
            </li>;
          })
        }
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onChangeCity: (city) => dispatch(ActionCreator.changeCity(city)),
});

const enhance = compose(
  withRouter,
  connect(null, mapDispatchToProps)
);

export {FavoritesList};
export default enhance(FavoritesList);

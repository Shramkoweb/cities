import React, {Fragment} from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list";
import CatalogEmpty from "../catalog-empty/catalog-empty";
import Tabs from "../tabs/tabs";
import Sort from "../sort/sort";

const Catalog = (props) => {
  const {offers, citiesCoordinates} = props;

  return (
    <Fragment>
      {offers.length ?
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>

          <Tabs/>

          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>

                <Sort/>

                <PlacesList offers={offers}/>

              </section>
              <div className="cities__right-section">
                <section className="cities__map map"/>
              </div>
            </div>
          </div>
        </main>
        : <CatalogEmpty/>
      }
    </Fragment>
  );
};

Catalog.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default Catalog;

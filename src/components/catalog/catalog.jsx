import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PlacesList from "../places-list/places-list";
import CatalogEmpty from "../catalog-empty/catalog-empty";
import Tabs from "../tabs/tabs";
import Sort from "../sort/sort";
import withActiveElement from "../../hocs/with-active-element";
import Map from "../map/map";
import {getActiveCity, getCoordinates, getSortedOffers} from "../../reducer/data/selector";
import witSelectState from "../../hocs/with-select-state/with-select-state";

const TabsWrapped = withActiveElement(Tabs);
const SortWrapped = witSelectState(Sort);

const Catalog = (props) => {
  const {
    currentCity,
    offers,
    mapCoordinates,
  } = props;

  return (
    <Fragment>
      {offers.length ?
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>

          <TabsWrapped currentCity={currentCity}/>

          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {currentCity}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by </span>

                  <SortWrapped/>

                </form>

                <PlacesList offers={offers}/>

              </section>
              <div className="cities__right-section">
                <section className="cities__map">
                  <Map coordinates={mapCoordinates} currentCity={currentCity}/>
                </section>
              </div>
            </div>
          </div>
        </main>
        : <CatalogEmpty currentCity={currentCity}/>
      }
    </Fragment>
  );
};

Catalog.propTypes = {
  currentCity: PropTypes.string,
  offers: PropTypes.array,
  mapCoordinates: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: getActiveCity(state),
  offers: getSortedOffers(state),
  mapCoordinates: getCoordinates(state),
});

export {Catalog};
export default connect(mapStateToProps)(Catalog);

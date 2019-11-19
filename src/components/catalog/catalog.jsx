import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PlacesList from "../places-list/places-list";
import CatalogEmpty from "../catalog-empty/catalog-empty";
import Tabs from "../tabs/tabs";
import Sort from "../sort/sort";
import withActiveElement from "../../hocs/with-active-element";
import Map from "../map/map";

const TabsWrapped = withActiveElement(Tabs);

const Catalog = (props) => {
  const {
    currentCity,
    offers,
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

                <Sort/>

                <PlacesList/>

              </section>
              <div className="cities__right-section">
                <Map/>
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
  currentCity: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offers: state.offers.filter((offer) => {
    return offer.city === state.currentCity;
  })
});

export {Catalog};
export default connect(mapStateToProps)(Catalog);

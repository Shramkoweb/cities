import * as React from "react";
import {connect} from "react-redux";
import PlacesList from "../places-list/places-list";
import CatalogEmpty from "../catalog-empty/catalog-empty";
import Tabs from "../tabs/tabs";
import Sort from "../sort/sort";
import withActiveElement from "../../hocs/with-active-element/with-active-element";
import Map from "../map/map";
import {getActiveCity, getCoordinates, getHoveredOffer, getSortedOffers} from "../../reducer/data/selector";
import witSelectState from "../../hocs/with-select-state/with-select-state";

const TabsWrapped = withActiveElement(Tabs);
const SortWrapped = witSelectState(Sort);

type OfferType = {
  id: string,
  city: string,
  previewImage: string,
  images: string,
  title: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  type: string,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: string[],
  host: string,
  description: string,
  location: number[]
};

interface CatalogProps {
  offers: object[],
  mapCoordinates: number[],
  activeOffer?: OfferType,
  currentCity: any,
}

const Catalog = (props: CatalogProps) => {
  const {
    currentCity,
    offers,
    mapCoordinates,
    activeOffer,
  } = props;

  return (
    <React.Fragment>
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
                  <Map coordinates={mapCoordinates} currentCity={currentCity} activeOffer={activeOffer}/>
                </section>
              </div>
            </div>
          </div>
        </main>
        : <CatalogEmpty currentCity={currentCity}/>
      }
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  activeOffer: getHoveredOffer(state),
  currentCity: getActiveCity(state),
  mapCoordinates: getCoordinates(state),
  offers: getSortedOffers(state),
});

export {Catalog};
export default connect(mapStateToProps)(Catalog);

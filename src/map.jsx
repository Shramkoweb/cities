import React, {PureComponent} from 'react';
import leaflet from "leaflet";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {CitiesCoordinatesMap} from "./constants";

const MapConfig = {
  ZOOM: 12,
  ICON_URL: `img/pin.svg`,
  ICON_SIZE: [30, 30],
  TILE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  TILE_ATTRIBUTE: `&copy; <a href="htps://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
  MAIN_CITY: [52.38333, 4.9]
};

const icon = leaflet.icon({
  iconUrl: MapConfig.ICON_URL,
  iconSize: MapConfig.ICON_SIZE
});

class Map extends PureComponent {
  componentDidMount() {
    this._init();
  }

  componentDidUpdate() {
    this._markerGroup.clearLayers();
    this._initMapCoordinates(this._map);
    this._initMarkerCoordinates();
  }

  _initMarkerCoordinates() {
    const markerCoordinates = this.props.coordinates;

    markerCoordinates.forEach((coordinate) => {
      leaflet
        .marker(coordinate, {icon})
        .addTo(this._markerGroup);
    });
  }

  _initMapCoordinates(map) {
    map.setView(CitiesCoordinatesMap.get(this.props.currentCity), MapConfig.ZOOM);
  }

  _addMarkers(map) {
    this._markerGroup = leaflet.layerGroup().addTo(map);
    this._initMarkerCoordinates();
  }

  _init() {
    this._map = leaflet.map(`map`, {
      center: MapConfig.MAIN_CITY,
      zoom: MapConfig.ZOOM,
      zoomControl: false,
      marker: true
    });

    this._initMapCoordinates(this._map);

    leaflet
      .tileLayer(MapConfig.TILE_LAYER, {
        attribution: MapConfig.TILE_ATTRIBUTE
      })
      .addTo(this._map);

    this._addMarkers(this._map);
  }

  render() {
    return <div className="cities__map map" id="map"/>;
  }
}

Map.propTypes = {
  coordinates: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  coordinates: state.offers
    .filter((offer) => offer.city === state.city)
    .map((element) => element.coordinates)
});

export default connect(mapStateToProps)(Map);

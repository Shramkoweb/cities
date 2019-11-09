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
    this._initMap(MapConfig, this.props.currentCity, this.props.coordinates);
  }

  componentDidUpdate() {
    this._markerGroup.clearLayers();
    this._setMapView(this._map, this.props.currentCity, MapConfig.ZOOM);
    this._renderMarkers(this.props.coordinates, this._markerGroup);
  }

  _renderMarkers(coordinates, markerGroup) {
    coordinates.forEach((coordinate) => {
      leaflet
        .marker(coordinate, {icon})
        .addTo(markerGroup);
    });
  }

  _createMarkersGroup(map, coordinates) {
    this._markerGroup = leaflet.layerGroup().addTo(map);
    this._renderMarkers(coordinates, this._markerGroup);
  }

  _setMapView(map, currentCity, zoom) {
    map.setView(CitiesCoordinatesMap.get(currentCity), zoom);
  }

  _initMap(mapConfig, currentCity, coordinates) {
    this._map = leaflet.map(`map`, {
      center: mapConfig.MAIN_CITY,
      zoom: mapConfig.ZOOM,
      zoomControl: false,
      marker: true
    });

    this._setMapView(this._map, currentCity, mapConfig.ZOOM);

    leaflet
      .tileLayer(mapConfig.TILE_LAYER, {
        attribution: mapConfig.TILE_ATTRIBUTE
      })
      .addTo(this._map);

    this._createMarkersGroup(this._map, coordinates);
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

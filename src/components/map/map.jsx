import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from "leaflet";

const MapConfig = {
  ZOOM: 12,
  ICON_URL: `img/pin.svg`,
  ICON_SIZE: [30, 30],
  TILE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  TILE_ATTRIBUTE: `&copy; <a href="htps://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
  MAIN_CITY: [52.38333, 4.9]
};

class Map extends PureComponent {
  componentDidMount() {
    this._init();
  }

  _init() {
    const markerCoordinates = this.props.citiesCoordinates;
    const city = MapConfig.MAIN_CITY;
    const icon = leaflet.icon({
      iconUrl: MapConfig.ICON_URL,
      iconSize: MapConfig.ICON_SIZE
    });

    const map = leaflet.map(`map`, {
      center: city,
      zoom: MapConfig.ZOOM,
      zoomControl: false,
      marker: true
    });

    map.setView(city, MapConfig.ZOOM);
    leaflet
      .tileLayer(MapConfig.TILE_LAYER, {
        attribution: MapConfig.TILE_ATTRIBUTE
      })
      .addTo(map);

    markerCoordinates.forEach((coordinate) => {
      leaflet
        .marker(coordinate, {icon})
        .addTo(map);
    });
  }

  render() {
    return <div className="cities__map map" id="map"/>;
  }
}

Map.propTypes = {
  citiesCoordinates: PropTypes.array.isRequired
};

export default Map;

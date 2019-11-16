import React from "react";
import Proptypes from "prop-types";

const Gallery = ({photos}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {photos.map((item, i) => (
          <div key={`property-image-${i}`} className="property__image-wrapper">
            <img className="property__image" src={item} alt="Photo studio"/>
          </div>)
        )}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  photos: Proptypes.arrayOf(Proptypes.string).isRequired
};

export default Gallery;

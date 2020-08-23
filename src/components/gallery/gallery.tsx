import * as React from "react";
import Constants from "../../constants";

const Gallery = (props) => {
  const photos = props.photos.slice(0, Constants.MAX_GALLERY_PHOTOS);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {photos.map((item, index) => (
          <div key={`property-image-${index}`} className="property__image-wrapper">
            <img className="property__image" src={item} alt="Photo studio"/>
          </div>)
        )}
      </div>
    </div>
  );
};

export default Gallery;

import Constants from "./constants";

const convertFloatToPercentage = (rating) => {
  return rating / Constants.MAX_RATING * 100;
};

const parseHost = (data = {}) => {
  return {
    id: data[`id`] || ``,
    name: data[`name`] || ``,
    isPro: data[`is_pro`] || ``,
    avatar: data[`avatar_url`] || ``
  };
};

const parseLocation = (data = {}) => {
  return {
    coordinates: [data[`latitude`], data[`longitude`]] || [],
    zoom: data[`zoom`] || ``
  };
};

const parseCity = (data = {}) => {
  return {
    name: data[`name`] || ``,
    location: [data[`location`][`latitude`], data[`location`][`longitude`]] || [],
    zoom: data[`location`][`zoom`] || ``
  };
};

export {
  parseHost,
  parseCity,
  parseLocation,
  convertFloatToPercentage
};

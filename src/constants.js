const Constants = {
  MAX_RATING: 5,
  MAX_GALLERY_PHOTOS: 6,
  CITIES: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  CITIES_COORDINATES: new Map([
    [`Cologne`, [50.938361, 6.959974]],
    [`Brussels`, [50.846557, 4.351697]],
    [`Paris`, [48.85661, 2.351499]],
    [`Dusseldorf`, [51.225402, 6.776314]],
    [`Amsterdam`, [52.37454, 4.897976]],
    [`Hamburg`, [53.550341, 10.000654]],
  ]),
};

const REQUEST = {
  BASE_URL: `https://htmlacademy-react-2.appspot.com/six-cities`,
  TIMEOUT: 5000,
  STATUS_CODE: {
    DENIED: 401,
    SUCCESS: 200,
  }
};

const PAGE_ADDRESS = {
  FAVORITE: `/favorite`,
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  MAIN: `/`,
  OFFER: `/offer`,
};

export {
  REQUEST,
  PAGE_ADDRESS,
};

export default Constants;

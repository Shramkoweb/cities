const Constants = {
  MAX_RATING: 5,
  CITIES: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  CITIES_COORDINATES: new Map([
    [`Cologne`, [50.938361, 6.959974]],
    [`Brussels`, [50.846557, 4.351697]],
    [`Paris`, [48.85661, 2.351499]],
    [`Dusseldorf`, [51.225402, 6.776314]],
    [`Amsterdam`, [52.37454, 4.897976]],
    [`Hamburg`, [53.550341, 10.000654]],
  ]),
  BASE_URL: `https://htmlacademy-react-2.appspot.com/six-cities`,
  TIMEOUT: 5000,
};

const REQUEST_STATUS_CODE = {
  SUCCESS: 200,
  DENIED: 403,
};

const REQUEST_URL = {
  LOGIN: `/login`,
  FAVORITE: `/favorite`,
  ROOM: `/offer`,
  HOTELS: `/hotels`,
};

export {
  REQUEST_URL,
  REQUEST_STATUS_CODE
};

export default Constants;

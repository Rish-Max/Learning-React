export const API_KEY = import.meta.env.VITE_API_KEY;
export const UNIT = "metric";
export const API_URL = "https://api.openweathermap.org/data/2.5/weather";
export const IMG_URL = "https://openweathermap.org/img/wn";
export const LOADING_DATA = {
  FETCH_WEATHER_TEXT: "🌀 Fetching Weather Info ....",
  FETCH_GEOLOCATION_TEXT: "🌀 Fetching GeoLocation Info ....",
};
export const STATUS_CODE = {
  OK: 200,
};
export const GEO_API_OPT = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 50000,
};

import { IMG_URL, GEO_API_OPT, API_URL, UNIT, API_KEY } from "../constant";

export function fetchCords() {
  if ("geolocation" in navigator) {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(
        (position) => res(success(position)),
        (err) => rej(error(err), GEO_API_OPT)
      );
    });
  } else {
    return Promise.reject({ message: "Permission Deined" });
  }
}

export function createImgURL(icon) {
  return `${IMG_URL}/${icon}@2x.png`;
}

export function getWeatherApiUrl({ lat, long }) {
  return `${API_URL}?lat=${lat}&lon=${long}&units=${UNIT}&appid=${API_KEY}`;
}

export function formatDate(date) {
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

function success(position) {
  return {
    lat: position.coords.latitude,
    long: position.coords.longitude,
  };
}

function error(err) {
  return err;
}

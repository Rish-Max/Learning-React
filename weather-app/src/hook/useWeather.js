import { fetchCords, getWeatherApiUrl } from "../utility/utilities";
import { LOADING_DATA, STATUS_CODE } from "../constant";
import { useEffect, useState } from "react";

export default function useWeather(
  weatherInfoDefaultValue = {},
  loadingInfoDefaultValue = LOADING_DATA.FETCH_GEOLOCATION_TEXT
) {
  const [weatherInfo, setWeatherInfo] = useState(weatherInfoDefaultValue);
  const [loading, setLoading] = useState({
    isLoading: true,
    msg: loadingInfoDefaultValue,
    hasError: false,
  });

  useEffect(() => {
    let ignore = false;
    async function getCord() {
      try {
        const coord = await fetchCords();
        setLoading({ ...loading, msg: LOADING_DATA.FETCH_WEATHER_TEXT });

        const WEATHER_API_URL = getWeatherApiUrl(coord);
        const res = await fetch(WEATHER_API_URL);
        const data = await res.json();

        if (data.cod != STATUS_CODE.OK) {
          throw new Error(data.message);
        }

        const { main, weather, name, sys } = data;
        if (!ignore) {
          setWeatherInfo({
            weather: weather[0],
            metaInfo: { ...main, city: name, country: sys.country },
          });
          setLoading({ ...loading, isLoading: false });
        }
      } catch (error) {
        setLoading({
          isLoading: false,
          msg: error.message,
          hasError: true,
        });
      }
    }

    getCord();

    return () => {
      ignore = true;
    };
  }, []);

  return [weatherInfo, loading];
}

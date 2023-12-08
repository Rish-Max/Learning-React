import Loading from "./Loading";
import { createImgURL, formatDate } from "../utility/utilities";

export default function Card({ weatherInfo, msg, isLoading }) {
  const date = new Date();
  const { weather, metaInfo } = weatherInfo;

  return (
    <div className="bg-white p-16 rounded-md">
      {isLoading ? (
        <Loading msg={msg} />
      ) : (
        <>
          <p className="text-orange-700">{formatDate(date)}</p>
          <p className="text-2xl font-bold text-slate-800">
            {metaInfo.city} , {metaInfo.country}
          </p>
          <div className="flex items-center">
            <img
              src={createImgURL(weather.icon)}
              alt="image"
              width={100}
              height={100}
            />
            <p className="text-xl leading-none">
              {metaInfo.temp}&deg;C <br />
              <span className="text-xs text-slate-500 leading-none">
                Max: {metaInfo.temp_max}&deg;C - Min: {metaInfo.temp_min}&deg;C
              </span>
            </p>
          </div>
          <p className="text-slate-500">
            Feels like {metaInfo.feels_like}&deg;C.
            <span className="capitalize"> {weather.description}</span>
          </p>
        </>
      )}
    </div>
  );
}

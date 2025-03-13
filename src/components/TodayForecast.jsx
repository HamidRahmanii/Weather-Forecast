import { getTime } from "../utility/date";

import "../styles/todayforecast.scss";

const TodayForecast = ({ todayHour }) => {
  return (
    <div className="today-forecast bg-sky-200 dark:bg-sky-950">
      <div className="today-forecast-title  text-sky-500 dark:text-sky-700">
        <h4>TODAY'S FORECAST</h4>
      </div>
      <div className="today-forecast-details">
        {todayHour
          ?.filter((_, index) => index >= 6 && (index - 6) % 3 === 0)
          .map((hour, index) => (
            <div key={index} className="today-forecast-children">
              <h5 className="text-blue-800 dark:text-blue-300">
                {getTime(hour.time)}{" "}
              </h5>
              <img src={hour?.condition?.icon} />
              <h4 className=" text-black dark:text-white">
                {Math.round(hour?.temp_c)}°
              </h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodayForecast;

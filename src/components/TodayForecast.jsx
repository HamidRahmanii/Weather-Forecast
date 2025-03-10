import { getTime } from "../utility/date";

import "../styles/todayforecast.scss";

const TodayForecast = ({ todayHour }) => {
  return (
    <div className="today-forecast bg-sky-950">
      <div className="today-forecast-title">
        <h4>TODAY'S FORECAST</h4>
      </div>
      <div className="today-forecast-details">
        {todayHour
          ?.filter((_, index) => index >= 6 && (index - 6) % 3 === 0)
          .map((hour, index) => (
            <div key={index} className="today-forecast-children">
              <h5>{getTime(hour.time)} </h5>
              <img src={hour?.condition?.icon} />
              <h4>{Math.round(hour?.temp_c)}°</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodayForecast;

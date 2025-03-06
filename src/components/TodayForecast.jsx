import { getTime } from "../utility/date";

const TodayForecast = ({ todayHour }) => {
  return (
    <div className="today-forecast">
      <div className="today-forecast-title">
        <h2>TODAY'S FORECAST</h2>
      </div>
      <div className="today-forecast-details">
        {todayHour
          ?.filter((_, index) => index >= 6 && (index - 6) % 3 === 0)
          .map((hour, index) => (
            <div key={index} className="today-forecast-children">
              <h3>{getTime(hour.time)} </h3>
              <img src={hour?.condition?.icon} />
              <h4>{Math.round(hour?.temp_c)}°</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodayForecast;

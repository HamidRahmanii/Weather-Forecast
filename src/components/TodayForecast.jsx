import { getTime } from "../utility/date";

const TodayForecast = ({ todayHour }) => {
  return (
    <div className="today-forecast">
      <div className="today-forecast-title">
        <h2>TODAY'S FORECAST</h2>
      </div>
      <div className="today-forecast-details">
        {todayHour
          ?.filter((_, index) => index >= 7 && (index - 7) % 3 === 0)
          .map((hour) => (
            <div className="today-forecast-children">
              <h3>{getTime(hour.time)} </h3>
              <img src={hour.condition.icon} />
              <h4>{Math.round(hour.temp_c)}°C</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodayForecast;

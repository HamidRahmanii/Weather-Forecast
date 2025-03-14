// Import utility function
import { getTime } from "../utility/date";

// Import styles
import "../styles/todayForecast.scss";

// TodayForecast component
const TodayForecast = ({ todayHour }) => {
  return (
    <div className="today-forecast bg-sky-200 dark:bg-sky-950">
      {/* Title for today's forecast */}
      <div className="today-forecast-title text-sky-500 dark:text-sky-700">
        <h4>TODAY'S FORECAST</h4>
      </div>

      {/* Forecast details */}
      <div className="today-forecast-details">
        {todayHour
          // Filter hours to show every 3rd hour starting from index 6
          ?.filter((_, index) => index >= 6 && (index - 6) % 3 === 0)
          .map((hour, index) => (
            <div key={index} className="today-forecast-children">
              {/* Time of the forecast */}
              <h5 className="text-blue-800 dark:text-blue-300">
                {getTime(hour.time)}
              </h5>

              {/* Weather icon */}
              <img src={hour?.condition?.icon} alt="Weather icon" />

              {/* Temperature */}
              <h4 className="text-black dark:text-white">
                {Math.round(hour?.temp_c)}°
              </h4>
            </div>
          ))}
      </div>
    </div>
  );
};

// Export TodayForecast component
export default TodayForecast;

// Import hooks
import { useSelector } from "react-redux";

// Import styles
import "../styles/week.scss";

// ThisWeek component
const ThisWeek = ({ forecastDay }) => {
  // Days of the week for mapping
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get the current theme from Redux store
  const theme = useSelector((state) => state.theme);

  return (
    <div className="this-week bg-sky-200 dark:bg-sky-950">
      {/* Title for the forecast section */}
      <div className="this-week-title text-sky-500 dark:text-sky-700">
        <h4>{forecastDay?.length}-DAY FORECAST</h4>
      </div>

      {/* Forecast details */}
      <div className="this-week-details">
        {forecastDay?.map((item, index) => {
          // Get the day of the week from the date
          const dayOfWeek = new Date(item?.date).getDay();
          const dayName = days[dayOfWeek];

          // Modify the name to "Today" for the first item
          const modifiedName = index === 0 ? "Today" : dayName;

          return (
            <div key={index} className="week-forecast-children">
              {/* Day name */}
              <h5 className="week-names text-black dark:text-white">
                {modifiedName}
              </h5>

              {/* Weather icon */}
              <img src={item?.day?.condition?.icon} alt="Weather icon" />

              {/* Weather condition text */}
              <h6 className="text-blue-800 dark:text-blue-300">
                {item?.day?.condition?.text}
              </h6>

              {/* Average temperature */}
              <h5 className="week-temps text-black dark:text-white">
                {Math.round(item.day.avgtemp_c)}°
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Export ThisWeek component
export default ThisWeek;

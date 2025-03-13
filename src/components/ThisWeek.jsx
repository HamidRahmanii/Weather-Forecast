import { useSelector } from "react-redux";
import "../styles/week.scss";

const ThisWeek = ({ forecastDay }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const theme = useSelector((state) => state.theme);

  return (
    <div className="this-week bg-sky-200 dark:bg-sky-950">
      <div className="this-week-title  text-sky-500 dark:text-sky-700">
        <h4>{forecastDay?.length}-DAY FORECAST</h4>
      </div>
      <div className="this-week-details">
        {forecastDay?.map((item, index) => {
          const dayOfWeek = new Date(item?.date).getDay();

          const dayName = days[dayOfWeek];

          const modifiedName = index === 0 ? "Today" : dayName;

          return (
            <div key={index} className="week-forecast-children">
              <h5 className="week-names text-black dark:text-white">
                {modifiedName}
              </h5>
              <img src={item?.day?.condition?.icon} />
              <h6 className=" text-blue-800 dark:text-blue-300">
                {item?.day?.condition?.text}
              </h6>
              <h5 className="week-temps  text-black dark:text-white">
                {Math.round(item.day.avgtemp_c)}°
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThisWeek;

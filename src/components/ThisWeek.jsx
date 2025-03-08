import "../styles/week.scss";

const ThisWeek = ({ forecastDay }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="this-week">
      <div className="this-week-title">
        <h4>7-DAY FORECAST</h4>
      </div>
      <div className="this-week-details">
        {forecastDay?.map((item, index) => {
          const dayOfWeek = new Date(item?.date).getDay();

          const dayName = days[dayOfWeek];

          const modifiedName =
            index === 0 ? "Today" : index === 1 ? "Tomorrow" : dayName;

          return (
            <div key={index} className="week-forecast-children">
              <h4 className="week-names">{modifiedName}</h4>
              <img src={item?.day?.condition?.icon} />
              <h5>{item?.day?.condition?.text}</h5>
              <h4 className="week-temps">{Math.round(item.day.avgtemp_c)}°</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThisWeek;

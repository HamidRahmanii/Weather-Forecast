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
        <h2>7-DAY FORECAST</h2>
      </div>
      <div className="this-week-details">
        {forecastDay?.map((item, index) => {
          const dayOfWeek = new Date(item?.date).getDay();

          const dayName = days[dayOfWeek];

          const modifiedName =
            index === 0 ? "Today" : index === 1 ? "Tomorrow" : dayName;

          return (
            <div key={index} className="week-forecast-children">
              <h2>{modifiedName}</h2>
              <img src={item?.day?.condition?.icon} />
              <h3>{item?.day?.condition?.text}</h3>
              <h2>{Math.round(item.day.avgtemp_c)}°</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThisWeek;

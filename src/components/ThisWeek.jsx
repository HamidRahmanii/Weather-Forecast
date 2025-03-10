import "../styles/week.scss";

const ThisWeek = ({ forecastDay }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="this-week bg-sky-950">
      <div className="this-week-title">
        <h4>7-DAY FORECAST</h4>
      </div>
      <div className="this-week-details">
        {forecastDay?.map((item, index) => {
          const dayOfWeek = new Date(item?.date).getDay();

          const dayName = days[dayOfWeek];

          const modifiedName = index === 0 ? "Today" : dayName;

          return (
            <div key={index} className="week-forecast-children">
              <h5 className="week-names">{modifiedName}</h5>
              <img src={item?.day?.condition?.icon} />
              <h6>{item?.day?.condition?.text}</h6>
              <h5 className="week-temps">{Math.round(item.day.avgtemp_c)}°</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThisWeek;

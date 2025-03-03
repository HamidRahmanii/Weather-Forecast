const Now = ({ dataLocation, dataCurrent, todayDate }) => {
  return (
    <div className="now">
      <div className="city-region">
        <h2>{dataLocation?.name}</h2>
        <h3>
          {dataLocation?.region}, {dataLocation?.country}
        </h3>
      </div>
      <div className="now-details">
        <div className="city-conditions">
          <h3>
            {"Chance of rain: "}
            {Math.round(todayDate?.daily_chance_of_rain)}%
          </h3>
          <h3>{dataCurrent?.condition?.text}</h3>
        </div>
        <div className="city-temperature">
          <h3>{Math.round(dataCurrent?.temp_c)}°</h3>
        </div>
        <div className="city-icon">
          <img
            src={dataCurrent?.condition?.icon}
            alt={dataCurrent?.condition?.text}
          />
        </div>
      </div>
    </div>
  );
};

export default Now;

const Now = ({ dataLocation, dataCurrent }) => {
  return (
    <div className="now">
      <div className="city-conditions">
        <div className="city-region">
          <h2>{dataLocation?.name}</h2>
          <h3>
            {dataLocation?.region}, {dataLocation?.country}
          </h3>
        </div>
        <div className="city-temperature">
          <h3>{Math.round(dataCurrent?.temp_c)}°</h3>
        </div>
      </div>
      <div className="now-details">
        <div className="city-icon">
          <img
            src={dataCurrent?.condition?.icon}
            alt={dataCurrent?.condition?.text}
          />
        </div>
        <h3>{dataCurrent?.condition?.text}</h3>
      </div>
    </div>
  );
};

export default Now;

import "../styles/now.scss";

const Now = ({ dataLocation, dataCurrent }) => {
  return (
    <div className="now">
      <div className="city-conditions">
        <div className="city-region">
          <h1>{dataLocation?.name}</h1>
          <h3>
            {dataLocation?.region}, {dataLocation?.country}
          </h3>
        </div>
        <div className="city-temperature">
          <h1>{Math.round(dataCurrent?.temp_c)}°</h1>
        </div>
      </div>
      <div className="now-details">
        <div className="city-icon">
          <img
            src={dataCurrent?.condition?.icon}
            alt={dataCurrent?.condition?.text}
          />
        </div>
        <h5>{dataCurrent?.condition?.text}</h5>
      </div>
    </div>
  );
};

export default Now;

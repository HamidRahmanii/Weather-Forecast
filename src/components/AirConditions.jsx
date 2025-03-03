const AirConditions = ({ dataCurrent }) => {
  return (
    <div className="air-conditions">
      <div className="air-conditions-title">
        <h2>AIR CONDITIONS</h2>
      </div>
      <div className="air-conditions-details">
        <div className="real-feel">
          <h2>Real Feel</h2>
          <h3>{Math.round(dataCurrent?.feelslike_c)}°</h3>
        </div>
        <div className="Humidity">
          <h2>Humidity</h2>
          <h3>{Math.round(dataCurrent?.humidity)}%</h3>
        </div>
        <div className="Pressure">
          <h2>Pressure</h2>
          <h3>{dataCurrent?.pressure_mb} mbar</h3>
        </div>
        <div className="Wind">
          <h2>Wind</h2>
          <h3> {dataCurrent?.wind_kph} km/h</h3>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;

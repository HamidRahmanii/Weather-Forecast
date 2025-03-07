import { FaTemperatureHalf } from "react-icons/fa6";
import { IoRainy } from "react-icons/io5";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { GiPressureCooker } from "react-icons/gi";
import { FaSun } from "react-icons/fa";

const AirConditions = ({ dataCurrent, todayDate }) => {
  return (
    <div className="air-conditions">
      <div className="air-conditions-title">
        <h2>AIR CONDITIONS</h2>
      </div>
      <div className="air-conditions-details">
        <div className="real-feel">
          <FaTemperatureHalf className="feel-icon" />
          <div className="feel">
            <h2>Real Feel</h2>
            <h3>{Math.round(dataCurrent?.feelslike_c)}°</h3>
          </div>
        </div>
        <div className="chance-of-rain">
          <IoRainy className="rain-icon" />
          <div className="rain">
            <h2>Chance of Rain</h2>
            <h3>{Math.round(todayDate?.daily_chance_of_rain)}%</h3>
          </div>
        </div>

        <div className="humidity">
          <IoIosWater className="humidity-icon" />
          <div className="humid">
            <h2>Humidity</h2>
            <h3>{Math.round(dataCurrent?.humidity)}%</h3>
          </div>
        </div>
        <div className="wind">
          <FaWind className="wind-icon" />
          <div className="windy">
            <h2>Wind</h2>
            <h3> {dataCurrent?.wind_kph} km/h</h3>
          </div>
        </div>
        <div className="pressure">
          <GiPressureCooker className="pressure-icon" />
          <div className="press">
            <h2>Pressure</h2>
            <h3>{dataCurrent?.pressure_mb} mbar</h3>
          </div>
        </div>
        <div className="uv-index">
          <FaSun className="uv-icon" />
          <div className="uv">
            <h2>UV Index</h2>
            <h3> {Math.round(dataCurrent?.uv)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;

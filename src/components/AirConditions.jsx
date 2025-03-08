import { FaTemperatureHalf } from "react-icons/fa6";
import { IoRainy } from "react-icons/io5";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { GiPressureCooker } from "react-icons/gi";
import { FaSun } from "react-icons/fa";

import "../styles/conditions.scss";

const AirConditions = ({ dataCurrent, todayDate }) => {
  return (
    <div className="air-conditions">
      <div className="air-conditions-title">
        <h4>AIR CONDITIONS</h4>
      </div>
      <div className="air-conditions-details">
        <div className="real-feel">
          <FaTemperatureHalf className="feel-icon" />
          <div className="feel">
            <h5>Real Feel</h5>
            <h3>{Math.round(dataCurrent?.feelslike_c)}°</h3>
          </div>
        </div>
        <div className="chance-of-rain">
          <IoRainy className="rain-icon" />
          <div className="rain">
            <h5>Chance of Rain</h5>
            <h3>{Math.round(todayDate?.daily_chance_of_rain)}%</h3>
          </div>
        </div>

        <div className="humidity">
          <IoIosWater className="humidity-icon" />
          <div className="humid">
            <h5>Humidity</h5>
            <h3>{Math.round(dataCurrent?.humidity)}%</h3>
          </div>
        </div>
        <div className="wind">
          <FaWind className="wind-icon" />
          <div className="windy">
            <h5>Wind</h5>
            <h3> {dataCurrent?.wind_kph} km/h</h3>
          </div>
        </div>
        <div className="pressure">
          <GiPressureCooker className="pressure-icon" />
          <div className="press">
            <h5>Pressure</h5>
            <h3>{dataCurrent?.pressure_mb} mbar</h3>
          </div>
        </div>
        <div className="uv-index">
          <FaSun className="uv-icon" />
          <div className="uv">
            <h5>UV Index</h5>
            <h3> {Math.round(dataCurrent?.uv)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;

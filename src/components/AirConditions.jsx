// Import icons from react-icons library
import { FaTemperatureHalf } from "react-icons/fa6";
import { IoRainy } from "react-icons/io5";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { GiPressureCooker } from "react-icons/gi";
import { FaSun } from "react-icons/fa";

// Import styles
import "../styles/conditions.scss";

// AirConditions component
const AirConditions = ({ dataCurrent, todayDate }) => {
  return (
    <div className="air-conditions bg-sky-100 dark:bg-sky-950 shadow-lg dark:shadow-none">
      {/* Title section */}
      <div className="air-conditions-title text-blue-400 dark:text-sky-700">
        <h4 className="!text-primary bg-primary">AIR CONDITIONS</h4>
      </div>

      {/* Details section */}
      <div className="air-conditions-details">
        {/* Real Feel */}
        <div className="real-feel">
          <FaTemperatureHalf className="feel-icon text-blue-600 dark:text-blue-300" />
          <div className="feel">
            <h5 className="text-blue-600 dark:text-blue-300">Real Feel</h5>
            <h3 className="text-black dark:text-white">
              {Math.round(dataCurrent?.feelslike_c)}°
            </h3>
          </div>
        </div>

        {/* Chance of Rain */}
        <div className="chance-of-rain">
          <IoRainy className="rain-icon text-blue-600 dark:text-blue-300" />
          <div className="rain">
            <h5 className="text-blue-600 dark:text-blue-300">Chance of Rain</h5>
            <h3 className="text-black dark:text-white">
              {Math.round(todayDate?.daily_chance_of_rain)}%
            </h3>
          </div>
        </div>

        {/* Humidity */}
        <div className="humidity">
          <IoIosWater className="humidity-icon text-blue-600 dark:text-blue-300" />
          <div className="humid">
            <h5 className="text-blue-600 dark:text-blue-300">Humidity</h5>
            <h3 className="text-black dark:text-white">
              {Math.round(dataCurrent?.humidity)}%
            </h3>
          </div>
        </div>

        {/* Wind */}
        <div className="wind">
          <FaWind className="wind-icon text-blue-600 dark:text-blue-300" />
          <div className="windy">
            <h5 className="text-blue-600 dark:text-blue-300">Wind</h5>
            <h3 className="text-black dark:text-white">
              {dataCurrent?.wind_kph} km/h
            </h3>
          </div>
        </div>

        {/* Pressure */}
        <div className="pressure">
          <GiPressureCooker className="pressure-icon text-blue-600 dark:text-blue-300" />
          <div className="press">
            <h5 className="text-blue-600 dark:text-blue-300">Pressure</h5>
            <h3 className="text-black dark:text-white">
              {dataCurrent?.pressure_mb} mbar
            </h3>
          </div>
        </div>

        {/* UV Index */}
        <div className="uv-index text-blue-600 dark:text-blue-300">
          <FaSun className="uv-icon" />
          <div className="uv">
            <h5 className="text-blue-600 dark:text-blue-300">UV Index</h5>
            <h3 className="text-black dark:text-white">
              {Math.round(dataCurrent?.uv)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export AirConditions component
export default AirConditions;

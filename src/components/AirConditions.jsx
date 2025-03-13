import { FaTemperatureHalf } from "react-icons/fa6";
import { IoRainy } from "react-icons/io5";
import { IoIosWater } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { GiPressureCooker } from "react-icons/gi";
import { FaSun } from "react-icons/fa";

import "../styles/conditions.scss";

const AirConditions = ({ dataCurrent, todayDate }) => {
  return (
    <div className="air-conditions bg-sky-200 dark:bg-sky-950">
      <div className="air-conditions-title  text-sky-500 dark:text-sky-700">
        <h4 className="!text-primary bg-primary">AIR CONDITIONS</h4>
      </div>
      <div className="air-conditions-details">
        <div className="real-feel">
          <FaTemperatureHalf
            className="feel-icon  text-blue-800 dark:text-blue-300
          "
          />
          <div className="feel">
            <h5
              className="text-blue-800 dark:text-blue-300
            "
            >
              Real Feel
            </h5>
            <h3 className="text-black dark:text-white">
              {Math.round(dataCurrent?.feelslike_c)}°
            </h3>
          </div>
        </div>
        <div className="chance-of-rain">
          <IoRainy
            className="rain-icon text-blue-800 dark:text-blue-300
          "
          />
          <div className="rain">
            <h5
              className="text-blue-800 dark:text-blue-300
            "
            >
              Chance of Rain
            </h5>
            <h3 className="text-black dark:text-white">
              {Math.round(todayDate?.daily_chance_of_rain)}%
            </h3>
          </div>
        </div>

        <div className="humidity">
          <IoIosWater
            className="humidity-icon text-blue-800 dark:text-blue-300
          "
          />
          <div className="humid">
            <h5
              className="text-blue-800 dark:text-blue-300
            "
            >
              Humidity
            </h5>
            <h3 className="text-black dark:text-white">
              {Math.round(dataCurrent?.humidity)}%
            </h3>
          </div>
        </div>
        <div className="wind">
          <FaWind
            className="wind-icon text-blue-800 dark:text-blue-300
          "
          />
          <div className="windy">
            <h5
              className="text-blue-800 dark:text-blue-300
            "
            >
              Wind
            </h5>
            <h3 className="text-black dark:text-white">
              {" "}
              {dataCurrent?.wind_kph} km/h
            </h3>
          </div>
        </div>
        <div className="pressure">
          <GiPressureCooker
            className="pressure-icon text-blue-800 dark:text-blue-300
          "
          />
          <div className="press">
            <h5
              className="text-blue-800 dark:text-blue-300
            "
            >
              Pressure
            </h5>
            <h3 className="text-black dark:text-white">
              {dataCurrent?.pressure_mb} mbar
            </h3>
          </div>
        </div>
        <div
          className="uv-index text-blue-800 dark:text-blue-300
        "
        >
          <FaSun className="uv-icon" />
          <div className="uv">
            <h5
              className="text-blue-800 dark:text-blue-300
            "
            >
              UV Index
            </h5>
            <h3 className="text-black dark:text-white">
              {" "}
              {Math.round(dataCurrent?.uv)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;

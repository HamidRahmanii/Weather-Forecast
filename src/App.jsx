import { useState, useEffect, useRef } from "react";
import { fetchAPI } from "./utility/api";
import "./App.scss";
import { getTime } from "./utility/date";
import TodayForecast from "./components/TodayForecast";

function App() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("qom");
  const inputRef = useRef(null);

  const getCityWeather = (city) => {
    fetchAPI
      .get("/", {
        params: {
          // key: apiKey, // کلید API خود را اینجا قرار دهید
          q: city, // استفاده از پارامتر city به جای مقدار ثابت "Moscow"
          // days: 5,
          // aqi: "no",
          // alerts: "no",
        },
      })
      .then((res) => {
        setData(res.data);
        inputRef.current.value = "";
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const city = inputRef.current.value;
    getCityWeather(city);
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log("data", data);

  useEffect(() => {
    getCityWeather(city);
  }, []);

  return (
    <div className="app">
      <div className="today">
        <form action="" onSubmit={handleSearch}>
          <div className="search-input">
            <input
              className="input"
              type="text"
              ref={inputRef}
              // value={city}
              // onChange={(e) => setCity(e.target.value)}
            />
            <button className="search" type="submit">
              search
            </button>
          </div>
        </form>
        <div className="now">
          <div className="now-text">
            <div className="city-region">
              <h2>{data.location?.name}</h2>
              <h3>{data.location?.country}</h3>
            </div>
            <div className="city-conditions">
              <h3>
                {"Chance of rain: "}
                {Math.round(
                  data.forecast?.forecastday[0].day.daily_chance_of_rain
                )}
                %
              </h3>
              <h3>{data.current?.condition.text}</h3>
            </div>
          </div>{" "}
          <div className="temperature">
            <h3>{Math.round(data.current?.temp_c)}°C</h3>
          </div>
          <div className="now-icon">
            <img
              src={data.current?.condition.icon}
              alt={data.current?.condition.text}
            />
          </div>
        </div>

        <TodayForecast todayHour={data?.forecast?.forecastday?.[0]?.hour} />

        <div className="air-conditions">
          <div className="air-conditions-title">
            <h2>AIR CONDITIONS</h2>
          </div>
          <div className="air-conditions-details">
            <h3>Real Feel: {Math.round(data.current?.feelslike_c)}°C</h3>
            <h3>Humidity: {Math.round(data.current?.humidity)}%</h3>
            <h3>Pressure: {data.current?.pressure_mb} mbar</h3>
            <h3>Wind: {data.current?.wind_kph} km/h</h3>
          </div>
        </div>
      </div>

      <div className="this-week">
        <div className="this-week-title">
          {" "}
          <h2>7-DAY FORECAST</h2>
        </div>
        <div className="this-week-details">
          {data.forecast?.forecastday?.map((item, index) => {
            const dayOfWeek = new Date(item.date).getDay();

            const dayName = days[dayOfWeek];

            const modifiedName =
              index === 0 ? "Today" : index === 1 ? "Tomorrow" : dayName;

            return (
              <div key={index} className="week-forecast-children">
                <h2>{modifiedName}</h2>
                <img src={item.day.condition.icon} />
                <h3>{item.day.condition.text}</h3>
                <h2>{Math.round(item.day.avgtemp_c)}°C</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

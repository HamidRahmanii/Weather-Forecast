import { useState, useEffect } from "react";
import { fetchAPI } from "./utility/api";
import "./App.scss";
import { getTime } from "./utility/date";

function App() {
  const [data, setData] = useState({});

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
      })
      .catch((err) => {
        console.log("error", err);
      });
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
    getCityWeather("qom");
  }, []);

  return (
    <div className="app">
      <div className="today">
        <div className="search-input">
          <input className="input" type="text" />
          <button className="search">search</button>
        </div>
        <div className="now">
          <div className="now-text">
            <div className="city-region">
              <h2>City: {data.location?.name}</h2>
              <h2>Country: {data.location?.country}</h2>
            </div>
            <div className="city-conditions">
              <h3>
                {"Chance of rain: "}
                {Math.round(
                  data.forecast?.forecastday[0].day.daily_chance_of_rain
                )}
                %
              </h3>
              <h3>Condition: {data.current?.condition.text}</h3>
              <h3>Temperature: {Math.round(data.current?.temp_c)}°C</h3>
            </div>
          </div>
          <div className="now-icon">
            <img
              src={data.current?.condition.icon}
              alt={data.current?.condition.text}
            />
          </div>
        </div>

        <div className="today-forecast">
          <div className="today-forecast-title">
            <h2>TODAY'S FORECAST</h2>
          </div>
          <div className="today-forecast-details">
            {data.forecast?.forecastday?.[0]?.hour
              .filter((_, index) => index >= 7 && (index - 7) % 3 === 0)
              .map((hour) => (
                // console.log(hour);
                <div className="today-forecast-children">
                  <h4>{getTime(hour.time)} </h4>
                  <img src={hour.condition.icon} />
                  <h4>{Math.round(hour.temp_c)}°C</h4>
                </div>
              ))}
          </div>
        </div>
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
        {data.forecast?.forecastday?.map((item, index) => {
          const dayOfWeek = new Date(item.date).getDay();

          const dayName = days[dayOfWeek];

          const modifiedName =
            index === 0 ? "Today" : index === 1 ? "Tomorrow" : dayName;

          return (
            <div key={index} className="week-forecast-children">
              <h3>{modifiedName}</h3>
              <img src={item.day.condition.icon} />
              <h3>{item.day.condition.text}</h3>
              <h3>{item.day.avgtemp_c}°C</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect, useRef } from "react";
import { fetchAPI } from "./utility/api";
import "./App.scss";
import { getTime } from "./utility/date";
import TodayForecast from "./components/TodayForecast";
import AirConditions from "./components/AirConditions";
import ThisWeek from "./components/ThisWeek";
import Now from "./components/Now";
import SearchInput from "./components/SearchInput";

function App() {
  const [data, setData] = useState({});
  const inputRef = useRef(null);

  const getCityWeather = (city) => {
    fetchAPI
      .get("/", {
        params: {
          q: city,
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

  console.log("data", data);

  useEffect(() => {
    getCityWeather("qom");
  }, []);

  return (
    <div className="app">
      <div className="today">
        <SearchInput inputRef={inputRef} handleSearch={handleSearch} />

        <Now
          dataLocation={data?.location}
          dataCurrent={data?.current}
          todayDate={data.forecast?.forecastday?.[0]?.day}
        />
        <TodayForecast todayHour={data?.forecast?.forecastday?.[0]?.hour} />
        <AirConditions dataCurrent={data.current} />
      </div>

      <ThisWeek forecastDay={data?.forecast?.forecastday} />
    </div>
  );
}

export default App;

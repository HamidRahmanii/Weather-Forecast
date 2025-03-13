import { useState, useEffect, useRef } from "react";
import { fetchAPI } from "./utility/api";
import "./styles/App.scss";

import Nav from "./components/Nav";
import Now from "./components/Now";
import TodayForecast from "./components/TodayForecast";
import AirConditions from "./components/AirConditions";
import ThisWeek from "./components/ThisWeek";
import Footer from "./components/footer";
import mockData from "./utility/mockData";

function App() {
  const [data, setData] = useState({});
  const [colors, setColors] = useState("#ffffff");
  const inputRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  const [theme, setTheme] = useState("dark");

  const getCityWeather = (city) => {
    setIsLoading(true);
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
        setData(mockData);
      })
      .finally(() => setIsLoading(false));
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

  // if (isLoading)
  //   return <div className="bg-red-500">Loading: {isLoading && "hast"}</div>;

  return (
    <div className="app bg-white dark:bg-black">
      <div className="header">
        <div className="today">
          <Nav
            inputRef={inputRef}
            handleSearch={handleSearch}
            theme={theme}
            setTheme={setTheme}
          />
          <Now
            dataLocation={data?.location}
            dataCurrent={data?.current}
            colors={colors}
            setColors={setColors}
          />
          <TodayForecast todayHour={data?.forecast?.forecastday?.[0]?.hour} />
          <AirConditions
            dataCurrent={data.current}
            todayDate={data.forecast?.forecastday?.[0]?.day}
          />
        </div>
        <ThisWeek forecastDay={data?.forecast?.forecastday} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

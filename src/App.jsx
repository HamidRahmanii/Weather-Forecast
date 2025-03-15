// Import hooks and utilities
import { useState, useEffect, useRef } from "react";
import { fetchAPI } from "./utility/api";

// Import styles
import "./styles/App.scss";

// Import components
import Nav from "./components/Nav";
import Now from "./components/Now";
import TodayForecast from "./components/TodayForecast";
import AirConditions from "./components/AirConditions";
import ThisWeek from "./components/ThisWeek";
import Footer from "./components/Footer";
import mockData from "./utility/mockData";

// App component
function App() {
  // State for weather data, colors, loading status, and theme
  const [data, setData] = useState({});
  const [colors, setColors] = useState("#ffffff");
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Fetch weather data for a given city
  const getCityWeather = (city) => {
    setIsLoading(true);
    fetchAPI
      .get("/", {
        params: {
          q: city, // City name as query parameter
        },
      })
      .then((res) => {
        setData(res.data); // Set weather data
        inputRef.current.value = ""; // Clear input field j
      })
      .catch((err) => {
        console.log("error", err); // Log error
        setData(mockData); // Fallback to mock data
      })
      .finally(() => setIsLoading(false)); // Reset loading state
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    const city = inputRef.current.value; // Get city from input
    getCityWeather(city); // Fetch weather data
  };

  // Log weather data for debugging
  console.log("data", data);

  // Fetch weather data for default city on component mount
  useEffect(() => {
    getCityWeather("qom"); // Default city
  }, []);

  // Render loading state (commented out for now)
  // if (isLoading)
  //   return <div className="bg-red-500">Loading: {isLoading && "hast"}</div>;

  return (
    <div className="app bg-white dark:bg-black">
      <div className="header">
        <div className="today">
          {/* Navigation bar */}
          <Nav
            inputRef={inputRef}
            handleSearch={handleSearch}
            theme={theme}
            setTheme={setTheme}
          />

          {/* Current weather details */}
          <Now
            dataLocation={data?.location}
            dataCurrent={data?.current}
            colors={colors}
            setColors={setColors}
          />

          {/* Today's hourly forecast */}
          <TodayForecast todayHour={data?.forecast?.forecastday?.[0]?.hour} />

          {/* Air conditions */}
          <AirConditions
            dataCurrent={data.current}
            todayDate={data.forecast?.forecastday?.[0]?.day}
          />
        </div>

        {/* Weekly forecast */}
        <ThisWeek forecastDay={data?.forecast?.forecastday} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Export App component
export default App;

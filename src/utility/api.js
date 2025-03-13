import axios from "axios";
const apiKey = import.meta.env.VITE_WEATHER_API;

const fetchAPI = axios.create({
  baseURL: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=7&aqi=no&alerts=no`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export { fetchAPI };

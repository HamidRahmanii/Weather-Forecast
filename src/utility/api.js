import axios from "axios";

const apiKey = "525c278831ce48b0922180156252402";

const fetchAPI = axios.create({
  baseURL: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=5&aqi=no&alerts=no`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export { fetchAPI };

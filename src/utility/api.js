// Import axios for HTTP requests
import axios from "axios";

// Get API key from environment variables
const apiKey = import.meta.env.VITE_WEATHER_API;

// Create axios instance with base URL and headers
const fetchAPI = axios.create({
  baseURL: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=7&aqi=no&alerts=no`, // Base URL with API key and default parameters
  headers: {
    Accept: "application/json", // Accept JSON responses
    "Content-Type": "application/json", // Set content type to JSON
  },
});

// Export the configured axios instance
export { fetchAPI };

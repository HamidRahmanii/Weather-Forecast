// Import configureStore from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import theme reducer
import themeReducer from "../components/themeSlice";

// Create Redux store
const store = configureStore({
  reducer: {
    theme: themeReducer, // Add theme reducer to the store
  },
});

// Export the store
export default store;

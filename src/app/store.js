import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../components/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;

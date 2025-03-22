// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("theme") ?? "light";
// Create theme slice
const themeSlice = createSlice({
  name: "theme", // Slice name
  initialState: initialState, // Initial state (default theme is light)
  reducers: {
    // Toggle between light and dark themes
    toggleTheme: (state) => {
      localStorage.setItem("theme", state === "light" ? "dark" : "light");

      return state === "light" ? "dark" : "light";
    },
  },
});

// Export actions and reducer
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

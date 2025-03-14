// Import createSlice from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Create theme slice
const themeSlice = createSlice({
  name: "theme", // Slice name
  initialState: "dark", // Initial state (default theme is dark)
  reducers: {
    // Toggle between light and dark themes
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
  },
});

// Export actions and reducer
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

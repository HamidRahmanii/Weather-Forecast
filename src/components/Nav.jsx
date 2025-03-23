// Import hooks and dependencies
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice/themeSlice";
import { useEffect } from "react";

// Import styles
import "../styles/nav.scss";
import ToggleButton from "./ToggleButton";

// Nav component
const Nav = ({ inputRef, handleSearch }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  // Update the HTML class based on the current theme

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Toggle theme between light and dark
  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="nav">
      {/* Search input */}
      <div className="search">
        <form action="" onSubmit={handleSearch}>
          <div className="search-input">
            <input
              className="input bg-sky-100 text-blue-700 dark:bg-sky-950 dark:text-blue-300 shadow-lg dark:shadow-none"
              type="search"
              ref={inputRef}
              placeholder="Search for cities"
            />
          </div>
        </form>
      </div>

      {/* Theme toggle button */}
      <ToggleButton />
    </div>
  );
};

// Export Nav component
export default Nav;

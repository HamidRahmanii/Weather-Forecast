// Import hooks and dependencies
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../components/themeSlice";
import { useEffect } from "react";

// Import styles
import "../styles/nav.scss";

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
              className="input bg-sky-200 text-blue-800 dark:bg-sky-950 dark:text-blue-300"
              type="search"
              ref={inputRef}
              placeholder="Search for cities"
            />
          </div>
        </form>
      </div>

      {/* Theme toggle button */}
      <div
        onClick={changeTheme}
        className="theme-button bg-sky-200 dark:bg-sky-950"
      >
        <button>{theme}</button>
      </div>
    </div>
  );
};

// Export Nav component
export default Nav;

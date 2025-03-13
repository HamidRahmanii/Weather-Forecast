import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../components/themeSlice";
import "../styles/nav.scss";
import { useEffect } from "react";

const Nav = ({ inputRef, handleSearch }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="nav">
      <div className="search">
        <form action="" onSubmit={handleSearch}>
          <div className="search-input">
            <input
              className="input bg-sky-200 text-blue-800  dark:bg-sky-950 dark:text-blue-300"
              type="search"
              ref={inputRef}
              placeholder="Search for cities"
            />
          </div>
        </form>
      </div>
      <div
        onClick={changeTheme}
        className="theme-button bg-sky-200 dark:bg-sky-950"
      >
        <button>{theme}</button>
      </div>
    </div>
  );
};

export default Nav;

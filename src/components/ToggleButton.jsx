import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "../styles/toggleButton.scss";
import { FaMoon, FaSun } from "react-icons/fa6";
import { toggleTheme } from "../app/store/slice/themeSlice";

const ToggleButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  // Toggle theme between light and dark
  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <input
        onChange={changeTheme}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label for="checkbox" className="checkbox-label">
        <FaSun className="fa-sun" />
        <FaMoon className="fa-moon" />
        <span className="ball  bg-sky-500"></span>
      </label>
    </div>
  );
};

export default ToggleButton;

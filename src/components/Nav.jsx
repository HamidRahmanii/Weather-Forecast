import "../styles/nav.scss";

const Nav = ({ inputRef, handleSearch, theme, setTheme }) => {
  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="nav">
      <div className="search">
        <form action="" onSubmit={handleSearch}>
          <div className="search-input">
            <input
              className="input bg-sky-950"
              type="search"
              ref={inputRef}
              placeholder="Search for cities"
            />
          </div>
        </form>
      </div>
      {/* <div
        onClick={changeTheme}
        className={`theme-button bg-amber-600 ${
          theme === "dark" ? "dark" : "light"
        }`}
      >
        <button>{theme}</button>
      </div> */}
    </div>
  );
};

export default Nav;

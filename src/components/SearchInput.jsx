const SearchInput = ({ inputRef, handleSearch }) => {
  return (
    <form action="" onSubmit={handleSearch}>
      <div className="search-input">
        <input
          className="input"
          type="search"
          ref={inputRef}
          placeholder="Search for cities"
        />
      </div>
    </form>
  );
};

export default SearchInput;

import React from "react";

const SearchBar = ({ filterText, handleFilterChange }) => {
  const handleChange = ({ target }) => {
    handleFilterChange(target.value);
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="search.."
        value={filterText}
        onChange={handleChange}
        aria-label="search"
      />
    </div>
  );
};

export default SearchBar;

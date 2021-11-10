import React from "react";

const SearchBar = ({ filterText, handleFilterChange }) => {
  const handleChange = ({ target }) => {
    handleFilterChange(target.value);
  };

  return (
    <div className="hero">
      <form>
        <input
          type="text"
          placeholder="Search.."
          value={filterText}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;

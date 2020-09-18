import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SearchInput.scss";

const SearchInput = ({ theme, onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSearch = event => {
    if (event.key === "Enter") {
      onSearch(searchValue);
    }
  };

  return (
    <div className="search-input-wrapper">
      <input
        className={`search-field ${theme}`}
        type="text"
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleSearch}
        placeholder="Search Blogs!"
      />
    </div>
  );
};

SearchInput.defaultProps = {
  value: ""
};

SearchInput.propTypes = {
  value: PropTypes.string
};

export default React.memo(SearchInput);

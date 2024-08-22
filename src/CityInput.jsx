import React from 'react';
import PropTypes from 'prop-types';
import "./App.css";

const CityInput = ({ input, setInput, search }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="city-search"
        placeholder="Enter City Name.."
        name="query"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyPress={search}
      />
    </div>
  );
};

CityInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default CityInput;

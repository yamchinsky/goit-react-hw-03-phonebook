import React from "react";
import PropTypes from "prop-types";

export default function FilterItem({ value, onChangeFilter }) {
  return (
    <div>
      <label className="phonebook-name">
        Find contacts by name
        <br />
        <input
          className="Type-editor-input"
          onChange={(evt) => onChangeFilter(evt.target.value)}
          value={value}
          type="text"
        />
      </label>
    </div>
  );
}

FilterItem.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

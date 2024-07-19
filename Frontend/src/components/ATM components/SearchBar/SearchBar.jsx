import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded-lg shadow-sm w-fit"
    />
  );
};

export default SearchBar;

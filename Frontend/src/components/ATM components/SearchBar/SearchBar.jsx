import React from 'react';

const SearchBar = ({
  value,
  onChange = () => {},
  onSearch = () => {},
  placeholder = "Search...",
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(value); // Trigger search when Enter is pressed
    }
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value || ''} // Ensure value is always a string
      onChange={(e) => onChange(e.target.value)}
      // onKeyPress={handleKeyPress} 
      aria-label="Search"
      className="p-2 border rounded-lg shadow-sm w-fit"
    />
  );
};

export default SearchBar;

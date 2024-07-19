import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search todos..."
      className="p-2 border rounded mb-4 w-full"
    />
  );
};

export default SearchBar;

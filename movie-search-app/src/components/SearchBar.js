// src/components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const clearSearch = () => {
    setQuery('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <div className="input-container">
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for a movie" 
        />
        {query && <button type="button" className="clear-button" onClick={clearSearch}>×</button>}
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

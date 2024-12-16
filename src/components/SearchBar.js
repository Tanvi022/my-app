import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <label htmlFor="search" className="search-label">Explore Now</label>
      <div className="search-bar">
        <input type="text" id="search" placeholder="Search..." className="search-input" />
        <select className="filter-dropdown">
          <option value="">All Categories</option>
          <option value="history">History</option>
          <option value="art">Art</option>
          <option value="culture">Culture</option>
        
        </select>
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;

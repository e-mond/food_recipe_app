// Header.js

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import './styles/main.css'

function Header({ onSearch }) {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">Recipe Management System</Link>
        </div>
        {location.pathname === '/recipes' && (
          <div className="search-bar">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search recipes"
                value={searchQuery}
                onChange={handleChange}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        )}
        <div className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/ingredients">Ingredients</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className="signin-btn">
              <Link to="/signin" className="btn-signin"><FaSignInAlt /></Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;

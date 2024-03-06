import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';
import kitchenImage from '../assets/L4.jpeg';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section" style={{ backgroundImage: `url(${kitchenImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Recipe Management System</h1>
          <p>Discover a world of delicious recipes right at your fingertips!</p>
          <Link to="/recipes" className="btn btn-primary">Get Started</Link>
        </div>
        <div className="hero-image">
          <FaUtensils size={200} color="#fff" />
        </div>
      </div>
    </div>
  );
}

export default Home;

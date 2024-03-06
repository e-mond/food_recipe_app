import React from 'react';
import '../styles/About.css'; 

function About() {
  return (
    <div className="about-container">
      <div className="about-banner">
        <h1>About Recipe Management System</h1>
      </div>
      <div className="about-content">
        <h2>About Recipe Management System</h2>
        <p>Welcome to the Recipe Management System, your go-to platform for discovering and managing delicious recipes!</p>
        <p>Features:</p>
        <ul>
          <li>Explore a vast collection of recipes from various cuisines and categories.</li>
          <li>Manage your favorite recipes and create custom recipe collections.</li>
          <li>Contribute your own recipes and share them with the community.</li>
          <li>Enjoy seamless navigation and user-friendly interface.</li>
        </ul>
        <p>This demo application showcases proficiency in React.js, including routing, state management, CRUD operations, API integration, and component lifecycle methods.</p>
        <div className="created-by">
          <p>Created by Edmond Anderson & Beniah Diallo</p>
          <p>Codetrain Africa</p>
          <p>Gen, 26</p>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
// import { Link } from 'react-router-dom';
import '../common/styles/Card.css'; 


const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.label} />
      <h3>{recipe.label}</h3>
    </div>
  );
};

export default RecipeCard;

import React from 'react';
import '../common/Details.css'; 

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipe-details">
      <h2>{recipe.recipe.label}</h2>
      <img src={recipe.image} alt={recipe.recipe.label} className="recipe-image" />
      <div className="recipe-info">
        <p><strong>Ingredients:</strong></p>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p><strong>Instructions:</strong></p>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetails;

import React from 'react';
import '../common/Details.css'; // Assuming the CSS file is located in the 'common' directory

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
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

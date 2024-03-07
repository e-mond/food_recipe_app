import React from 'react';

const IngredientsPage = ({ recipe }) => {
  // Checking to see if recipe exists and has ingredients
  if (!recipe || !recipe.ingredients) {
    return <div>No ingredients found</div>;
  }

  return (
    <div className="ingredients-page">
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsPage;

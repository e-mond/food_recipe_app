import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import IngredientsPage from '../ingredients/IngredientsPage';
import { fetchRecipe } from '../../utils/api';

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipe(recipeId)
      .then(data => {
        setRecipe(data);
      })
      .catch(error => {
        console.error('Error fetching recipe:', error);
      });
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-page">
      <RecipeDetails recipe={recipe} />
      <IngredientsPage recipe={recipe.recipe} /> 
    </div>
  );
}

export default RecipePage;

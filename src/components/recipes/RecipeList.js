import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { fetchRecipes } from '../../utils/api';

const RecipeList = ({ recipes, onSearch }) => {
  const [fetchedRecipes, setFetchedRecipes] = useState([]);

  useEffect(() => {
    if (!recipes) {
      // Fetch recipes only if recipes prop is null or undefined
      fetchRecipes('jollof')
        .then(data => {
          console.log('API response:', data);
          setFetchedRecipes(data || []); // Update state with fetched recipes or an empty array
        })
        .catch(error => {
          console.error('Error fetching recipes:', error);
        });
    } else {
      // Use the provided recipes prop if available
      setFetchedRecipes(recipes);
    }
  }, [recipes]); // Re-run effect whenever recipes prop changes

  if (!fetchedRecipes || fetchedRecipes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {fetchedRecipes.map(recipe => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </div>
  );
}

export default RecipeList;

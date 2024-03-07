import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
// import { fetchRecipes } from '../../utils/api';
import axios from 'axios';


const RecipeList = ({ recipes, onSearch }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        const apiId = '060315d5';
        const apiKey = '779684a0718f8fbc41bb123d3fa1b1da';
  
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=jollof&app_id=${apiId}&app_key=${apiKey}`;
  
        try {
          const response = await axios.get(url);
          setData(response.data.hits);
        console.log(response);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };

    fetchData();
  }, []); // Empty dependency array means it will only run once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {data.map((recipe, index) => (
        <Link to={`/recipe/${recipe.recipe.label}`} key={index}>
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </div>
  );
}

export default RecipeList;

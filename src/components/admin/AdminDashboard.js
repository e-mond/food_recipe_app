import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../recipes/RecipeCard';
import AddRecipeForm from './AddRecipeForm';
import EditRecipeForm from './EditRecipeForm';

const AdminDashboard = ({ recipes, onAdd, onDelete, onUpdate }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editRecipe, setEditRecipe] = useState(null);

  const handleEditClick = (recipe) => {
    setEditRecipe(recipe);
    setShowEditForm(true);
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      
      <div className="actions">
        <button onClick={() => setShowAddForm(true)}>Add New Recipe</button>
        <Link to="/recipes">View All Recipes</Link>
      </div>
      
      {showAddForm && <AddRecipeForm onAdd={onAdd} />}
      
      {showEditForm && editRecipe && (
        <EditRecipeForm recipe={editRecipe} onUpdate={onUpdate} />
      )}

      <h3>Existing Recipes:</h3>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <RecipeCard recipe={recipe} />
            <button onClick={() => handleEditClick(recipe)}>Edit</button>
            <button onClick={() => onDelete(recipe.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;

import React, { useState } from 'react';

const AddRecipeForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!title || !ingredients || !instructions || !image) {
      alert('Please fill in all fields');
      return;
    }
    // Create new recipe object
    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'),
      instructions,
      image,
    };
    // Pass new recipe to parent component
    onAdd(newRecipe);
    // Clear form fields
    setTitle('');
    setIngredients('');
    setInstructions('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      
      <label>Ingredients:</label>
      <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
      
      <label>Instructions:</label>
      <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)}></textarea>
      
      <label>Image URL:</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;

import React, { useState, useEffect } from 'react';

const EditRecipeForm = ({ recipe, onUpdate }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    setTitle(recipe.title);
    setIngredients(recipe.ingredients.join('\n'));
    setInstructions(recipe.instructions);
    setImage(recipe.image);
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!title || !ingredients || !instructions || !image) {
      alert('Please fill in all fields');
      return;
    }
    // Update recipe object
    const updatedRecipe = {
      ...recipe,
      title,
      ingredients: ingredients.split('\n'),
      instructions,
      image,
    };
    // Pass updated recipe to parent component
    onUpdate(updatedRecipe);
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
      
      <button type="submit">Update Recipe</button>
    </form>
  );
}

export default EditRecipeForm;

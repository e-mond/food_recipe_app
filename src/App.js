import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchRecipes, fetchRecipe } from './utils/api'; // Assuming you have functions to fetch recipes and a single recipe
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/Home';
import About from './components/About';
import RecipeList from './components/recipes/RecipeList';
import RecipeDetails from './components/recipes/RecipeDetails';
import IngredientsPage from './components/ingredients/IngredientsPage';
import SignInForm from './components/common/SignInForm';
import SignUpForm from './components/common/SignUpForm';
import AdminDashboard from './components/admin/AdminDashboard';
import AddRecipeForm from './components/admin/AddRecipeForm';
import EditRecipeForm from './components/admin/EditRecipeForm';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes when the component mounts
    fetchRecipes('jollof')
      .then(data => {
        setRecipes(data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  const handleSearch = (query) => {
    fetchRecipes(query)
      .then(data => {
        setRecipes(data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
          {/* Routing for Recipe Details with dynamic id */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          {/* Routing for Ingredients Page with dynamic id */}
          <Route path="/ingredients/:id" element={<IngredientsPage />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

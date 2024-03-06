// api.js
import axios from 'axios';

const API_ID = '708960fb';
const API_KEY = 'bd112a6b5f4e5b3a0ea1b09b6c88069a';

const baseURL = 'https://api.edamam.com/api/recipes/v2';

const api = axios.create({
  baseURL,
  params: {
    type: 'public',
    app_id: API_ID,
    app_key: API_KEY,
  },
});

export const fetchRecipes = async (query) => {
  try {
    const response = await api.get('/search', {
      params: {
        q: query,
      },
    });
    return response.data.hits; // Assuming the response data contains an array of recipe hits
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return null;
  }
};

export default api;


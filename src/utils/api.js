// api.js
import axios from 'axios';

const API_ID = '060315d5';
const API_KEY = '779684a0718f8fbc41bb123d3fa1b1da';

const baseURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=jollof';

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
    const response = await axios.get('/search', {
      params: {
        q: query,
      },
    });
    return response?.data?.hits; // Assuming the response data contains an array of recipe hits
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return null;
  }
};

export default api;


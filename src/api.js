import axios from 'axios';
import { API_URL } from './env.js';

const API_CLIENT = axios.create({
  baseURL: API_URL + "/api",
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchOptions = async () => {
  try {
    const response = await API_CLIENT.get('/get-options');
    return response.data.body;
  } catch (error) {
    console.error('Error fetching options:', error);
    throw error;
  }
};

export const saveUserOption = async (userOption) => {
  try {
    const response = await API_CLIENT.post('/save', userOption);
    return response.data;
  } catch (error) {
    console.error('Error saving user option:', error);
    throw error;
  }
};

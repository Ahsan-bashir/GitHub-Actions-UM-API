import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
  }
});

// Request interceptor
api.interceptors.request.use(
  config => {
    console.log(`[${import.meta.env.VITE_APP_ENV}] Request:`, config.url);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const userService = {
  // Get all users
  getAllUsers: async () => {
    const response = await api.get('/users');
    return response.data;
  },

  // Get single user
  getUser: async id => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  // Create user
  createUser: async userData => {
    const response = await api.post('/users', userData);
    return response.data;
  },

  // Update user
  updateUser: async (id, userData) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },

  // Delete user
  deleteUser: async id => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  }
};

export const healthService = {
  checkHealth: async () => {
    const response = await axios.get(
      API_URL.replace('/api', '') + '/health'
    );
    return response.data;
  }
};

export default api;
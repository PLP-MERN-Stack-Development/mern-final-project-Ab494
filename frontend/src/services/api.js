import axios from 'axios';
import toast from 'react-hot-toast';

// Create axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor - Add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    
    // Handle specific error codes
    if (response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      toast.error('Session expired. Please login again.');
      window.location.href = '/login';
    } else if (response?.status === 403) {
      toast.error('You do not have permission to perform this action.');
    } else if (response?.status === 404) {
      toast.error('Resource not found.');
    } else if (response?.status >= 500) {
      toast.error('Server error. Please try again later.');
    } else if (response?.data?.message) {
      // Show specific error message from server
      const message = response.data.message;
      if (message.includes('already exists') || message.includes('already registered')) {
        toast.error('This email is already registered. Please use a different email or try logging in.');
      } else if (message.includes('required')) {
        toast.error('Please fill in all required fields.');
      } else if (message.includes('6 characters')) {
        toast.error('Password must be at least 6 characters long.');
      } else {
        toast.error(message);
      }
    } else if (error.message) {
      // Handle network errors or other connection issues
      if (error.message.includes('Network Error') || error.message.includes('CORS')) {
        toast.error('Connection error. Please check your internet connection and try again.');
      } else {
        toast.error(error.message);
      }
    } else {
      toast.error('Registration failed. Please try again.');
    }
    
    return Promise.reject(error);
  }
);

export default api;
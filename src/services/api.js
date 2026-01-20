import axios from 'axios';

// Create axios instance with base configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getMe: () => api.get('/auth/me'),
  changePassword: (passwordData) => api.post('/auth/change-password', passwordData),
  logout: () => api.post('/auth/logout'),
};

// Projects API
export const projectsAPI = {
  getAll: (params = {}) => api.get('/projects', { params }),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post('/projects', data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`),
  toggleVisibility: (id) => api.patch(`/projects/${id}/visibility`),
};

// Experience API
export const experienceAPI = {
  getAll: (params = {}) => api.get('/experience', { params }),
  getById: (id) => api.get(`/experience/${id}`),
  create: (data) => api.post('/experience', data),
  update: (id, data) => api.put(`/experience/${id}`, data),
  delete: (id) => api.delete(`/experience/${id}`),
};

// Education API
export const educationAPI = {
  getAll: (params = {}) => api.get('/education', { params }),
  getById: (id) => api.get(`/education/${id}`),
  create: (data) => api.post('/education', data),
  update: (id, data) => api.put(`/education/${id}`, data),
  delete: (id) => api.delete(`/education/${id}`),
  toggleVisibility: (id) => api.patch(`/education/${id}/visibility`),
};

// Skills API
export const skillsAPI = {
  getAll: (params = {}) => api.get('/skills', { params }),
  getById: (id) => api.get(`/skills/${id}`),
  getCategories: () => api.get('/skills/categories'),
  create: (data) => api.post('/skills', data),
  update: (id, data) => api.put(`/skills/${id}`, data),
  delete: (id) => api.delete(`/skills/${id}`),
  toggleFeatured: (id) => api.patch(`/skills/${id}/featured`),
  search: (query) => api.get(`/skills/search/${query}`),
};

// Certifications API
export const certificationsAPI = {
  getAll: (params = {}) => api.get('/certifications', { params }),
  getById: (id) => api.get(`/certifications/${id}`),
  getProviders: () => api.get('/certifications/providers'),
  getCategories: () => api.get('/certifications/categories'),
  create: (data) => api.post('/certifications', data),
  update: (id, data) => api.put(`/certifications/${id}`, data),
  delete: (id) => api.delete(`/certifications/${id}`),
  toggleVerification: (id) => api.patch(`/certifications/${id}/verify`),
  search: (query) => api.get(`/certifications/search/${query}`),
};

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact', data),
  getAll: (params = {}) => api.get('/contact', { params }),
  getById: (id) => api.get(`/contact/${id}`),
  getStats: () => api.get('/contact/stats'),
  updateStatus: (id, status) => api.patch(`/contact/${id}/status`, { status }),
  updatePriority: (id, priority) => api.patch(`/contact/${id}/priority`, { priority }),
  toggleSpam: (id) => api.patch(`/contact/${id}/spam`),
  delete: (id) => api.delete(`/contact/${id}`),
};

// Utility functions
export const handleApiError = (error) => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  if (error.message) {
    return error.message;
  }
  return 'An unexpected error occurred';
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
};

export default api;
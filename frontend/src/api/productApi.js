import axios from 'axios';

// TODO: Update this URL to your deployed backend URL before final submission
const API_URL = 'https://product-manager-jf4p.onrender.com/api/products';

export const getProducts = () => axios.get(API_URL);
export const getProduct = (id) => axios.get(`${API_URL}/${id}`);
export const createProduct = (data) => axios.post(API_URL, data);
export const updateProduct = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);

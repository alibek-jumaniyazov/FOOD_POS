import axios from "axios";

const API = axios.create({
  baseURL: "https://food-pos-backend.onrender.com",
});

export const fetchProducts = (category = "") => API.get(`/products${category}`);
export const deleteProduct = (category, id) =>
  API.delete(`/products/${category}/${id}`);
export const editProduct = (category, id, updatedProduct) =>
  API.put(`/products/${category}/${id}`, updatedProduct);
export const addProduct = (category, product) =>
  API.post(`/products/${category}`, product);

export const fetchCart = () => API.get("/cart");
export const addCart = (product) => API.post("/cart", product);
export const deleteCart = (id) => API.delete(`/cart/${id}`);
export const putCart = (id, count, note) =>
  API.put(`/cart/${id}`, { count, note });

export const fetchOrders = () => API.get("/orders");
export const addOrder = (product) => API.post("/orders", product);
export const deleteOrder = (id) => API.delete(`/orders/${id}`);
export const putOrder = (id, status) =>
  API.put(`/orders/${id}/status`, { status });

export const fetchMostOrders = () => API.get("/orders/most");
export const fetchStatisticsOrders = () => API.get("/orders/statistics");

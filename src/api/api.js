import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
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
export const putCart = (id, count) => API.put(`/cart/${id}`, { count });

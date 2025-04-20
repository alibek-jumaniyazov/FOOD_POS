import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchProducts = () => API.get("/products");

export const addProduct = (product) => API.post("/products", product);

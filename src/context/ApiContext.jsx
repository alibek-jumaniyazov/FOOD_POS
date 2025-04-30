import React, { createContext, useContext, useEffect, useState } from "react";
import {
  addCart,
  deleteCart,
  fetchCart,
  fetchProducts,
  putCart,
} from "../api/api.js";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsHot, setProductsHot] = useState([]);
  const [productsCold, setProductsCold] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetchProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getProductsHotDishes = async () => {
    try {
      const response = await fetchProducts("/hotdishes");
      setProductsHot(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const getProductsColdDishes = async () => {
    try {
      const response = await fetchProducts("/colddishes");
      setProductsCold(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getCart = async () => {
    try {
      const response = await fetchCart();
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const postCrat = async (product) => {
    try {
      const response = await addCart(product);
      console.log(response);
      getCart();
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const deletCart = async (id) => {
    try {
      const response = await deleteCart(id);
      console.log(response);
      getCart();
    } catch (error) {
      console.error("Error delete cart:", error);
    }
  };

  const updateCart = async (id, count) => {
    try {
      const res = await putCart(id, count);
      getCart();
      return res.data;
    } catch (err) {
      console.error("Cart update error:", err);
    }
  };

  useEffect(() => {
    getProducts();
    getCart();
    getProductsHotDishes();
    getProductsColdDishes();
  }, []);

  const getMethods = {
    products,
    productsHot,
    productsCold,
    cart,
    getProductsHotDishes,
    getProductsColdDishes,
    getProducts,
    getCart,
    deletCart,
    postCrat,
    updateCart,
  };

  return (
    <ApiContext.Provider value={getMethods}>{children}</ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  addCart,
  addProduct,
  deleteCart,
  deleteProduct,
  editProduct,
  fetchCart,
  fetchProducts,
  putCart,
} from "../api/api.js";
import dayjs from "dayjs";

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

  const postProduct = async (category, product) => {
    try {
      const response = await addProduct(category, product);
      console.log(response.status);
      getProducts();
      getProductsHotDishes();
      getProductsColdDishes();
    } catch (err) {
      alert("Error post product");
      console.error(err);
    }
  };

  const putProduct = async (category, id, updatedProduct) => {
    try {
      const response = await editProduct(category, id, updatedProduct);
      console.log(response.status);
      getProducts();
      getProductsHotDishes();
      getProductsColdDishes();
    } catch (err) {
      alert("Error post product");
      console.error(err);
    }
  };

  const removeProduct = async (category, id) => {
    try {
      const response = await deleteProduct(category, id);
      console.log(response.status);
      getProducts();
      getProductsHotDishes();
      getProductsColdDishes();
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
    postProduct,
    putProduct,
    removeProduct,
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

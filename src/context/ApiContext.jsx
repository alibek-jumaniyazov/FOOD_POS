import React, { createContext, useContext, useEffect, useState } from "react";
import {
  addCart,
  addOrder,
  addProduct,
  deleteCart,
  deleteOrder,
  deleteProduct,
  editProduct,
  fetchCart,
  fetchMostOrders,
  fetchOrders,
  fetchProducts,
  fetchStatisticsOrders,
  putCart,
} from "../api/api.js";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsHot, setProductsHot] = useState([]);
  const [productsCold, setProductsCold] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [mostOrders, setMostOrders] = useState([]);
  const [statisticsOrders, setStatisticsOrders] = useState({});

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

  const updateCart = async (id, count, note) => {
    try {
      const res = await putCart(id, count, note);
      getCart();
      return res.data;
    } catch (err) {
      console.error("Cart update error:", err);
    }
  };

  const getOrders = async () => {
    try {
      const response = await fetchOrders();
      setOrders(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching Orders:", error);
    }
  };

  const postOrders = async (product) => {
    try {
      const response = await addOrder(product);
      getOrders();
      getCart();
      getProducts();
      getMostOrders();
      getProductsHotDishes();
      getProductsColdDishes();
      getStatisticsOrders();
      return response.status;
    } catch (error) {
      console.error("Error updating Orders:", error);
    }
  };

  const deletOrders = async (id) => {
    try {
      const response = await deleteOrder(id);
      console.log(response);
      getOrders();
    } catch (error) {
      console.error("Error delete Orders:", error);
    }
  };

  const putOrder = async (id, status) => {
    try {
      const res = await putCart(id, status);
      getOrders();
      return res.data;
    } catch (err) {
      console.error("Orders update error:", err);
    }
  };

  const getMostOrders = async () => {
    try {
      const response = await fetchMostOrders();
      setMostOrders(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching Most:", error);
    }
  };

  const getStatisticsOrders = async () => {
    try {
      const response = await fetchStatisticsOrders();
      setStatisticsOrders(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error Statistics Orders:", error);
    }
  };

  useEffect(() => {
    getProducts();
    getCart();
    getOrders();
    getMostOrders();
    getStatisticsOrders();
    getProductsHotDishes();
    getProductsColdDishes();
  }, []);

  const getMethods = {
    products,
    productsHot,
    productsCold,
    cart,
    orders,
    mostOrders,
    statisticsOrders,
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
    getOrders,
    postOrders,
    deletOrders,
    putOrder,
  };

  return (
    <ApiContext.Provider value={getMethods}>{children}</ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);

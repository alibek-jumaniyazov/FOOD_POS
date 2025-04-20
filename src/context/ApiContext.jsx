import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../api/api.js";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const response = await fetchProducts();
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const getMethods = {
    products,
    getProduct, 
  };

  return (
    <ApiContext.Provider value={getMethods}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);

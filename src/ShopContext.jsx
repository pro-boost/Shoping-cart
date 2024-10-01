import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
    setIsEmpty(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        product,
        setProduct,
        products,
        setProducts,
        count,
        isEmpty,
        handleClick,
      }}>
      {children}
    </ShopContext.Provider>
  );
};

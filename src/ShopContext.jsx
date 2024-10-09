import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [counts, setCounts] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);

  const handleDeleteToast = () => {
    setShowDeleteToast(true);
    setTimeout(() => {
      setShowDeleteToast(false);
    }, 3000);
  };

  const handleToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleClick = (productToAdd) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === productToAdd.id
      );

      if (existingProductIndex >= 0) {
        const newCounts = [...counts];
        newCounts[existingProductIndex] += 1;
        setCounts(newCounts);
        return prevCart;
      } else {
        setCounts((prevCounts) => [...prevCounts, 1]);
        return [...prevCart, productToAdd];
      }
    });

    setCount((prevCount) => prevCount + 1);
    setIsEmpty(false);
    handleToast();
  };

  const handleDelete = (productId) => {
    setCart((prevCart) => {
      const indexToRemove = prevCart.findIndex((item) => item.id === productId);

      if (indexToRemove < 0) return prevCart;

      const countToRemove = counts[indexToRemove];
      const updatedCounts = [...counts];
      updatedCounts.splice(indexToRemove, 1);

      const updatedCart = prevCart.filter((item) => item.id !== productId);

      setCounts(updatedCounts);
      setCount((prevCount) => Math.max(0, prevCount - countToRemove));
      setIsEmpty(updatedCart.length === 0);

      return updatedCart;
    });
    handleDeleteToast();
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
        cart,
        handleDelete,
        counts,
        setCounts,
        showToast,
        setShowToast,
        handleToast,
        showDeleteToast,
      }}>
      {children}
    </ShopContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;

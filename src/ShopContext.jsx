import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [counts, setCounts] = useState([]);

  const handleClick = (productToAdd) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === productToAdd.id
      );

      if (existingProductIndex >= 0) {
        // If the product already exists in the cart, just increase the count
        const newCounts = [...counts];
        newCounts[existingProductIndex] += 1;
        setCounts(newCounts);
        return prevCart; // Don't add again, just return the existing cart
      } else {
        // Add new product to the cart and initialize its count
        setCounts((prevCounts) => [...prevCounts, 1]);
        return [...prevCart, productToAdd];
      }
    });

    // Update count and isEmpty
    setCount((prevCount) => prevCount + 1);
    setIsEmpty(false);
  };

  const handleDelete = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);

      // Get index of the deleted product
      const indexToRemove = prevCart.findIndex((item) => item.id === productId);

      if (indexToRemove >= 0) {
        setCounts((prevCounts) =>
          prevCounts.filter((_, index) => index !== indexToRemove)
        );
      }

      // Check if the cart is now empty
      const newIsEmpty = updatedCart.length === 0;

      // Update count based on the deletion
      setCount((prevCount) => Math.max(0, prevCount - 1));
      setIsEmpty(newIsEmpty);

      return updatedCart;
    });
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
      }}>
      {children}
    </ShopContext.Provider>
  );
};

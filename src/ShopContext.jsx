import { createContext, useState } from "react";

export const ShopContext = createContext();

export const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleClick = () => {
    setCount(count + 1);
    setIsEmpty(false);
  };

  return (
    <ShopContext.Provider value={{ count, isEmpty, handleClick }}>
      {children}
    </ShopContext.Provider>
  );
};

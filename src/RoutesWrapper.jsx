import { Routes, Route } from "react-router-dom";
import CartPage from "./Components/CartPage/CartPage.jsx";
import EmptyCartPage from "./Components/CartPage/EmptyCartPage.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import StorePage from "./Components/StorePage/StorePage/StorePage.jsx";
import ItemPage from "./Components/StorePage/ItemPage/ItemPage.jsx";
import ItemCard from "./Components/StorePage/ItemCard/ItemCard.jsx";
import NotFoundPage from "./Router/NotFoundPage.jsx";
import { ShopContext } from "./ShopContext.jsx";
import { useContext } from "react";
import styles from "./App.module.css";

function RoutesWrapper() {
  const { isEmpty } = useContext(ShopContext);

  return (
    <div className={styles.routes}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="store" element={<StorePage />} />
        <Route path="store/:category" element={<ItemPage />} />
        <Route path="store/:category/:id" element={<ItemCard />} />
        <Route
          path="cart"
          element={isEmpty ? <EmptyCartPage /> : <CartPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default RoutesWrapper;

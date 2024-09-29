import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import CartPage from "./Components/CartPage/CartPage.jsx";
import StorePage from "./Components/StorePage/StorePage/StorePage.jsx";
import ItemPage from "./Components/StorePage/ItemPage/ItemPage.jsx";
import ItemCard from "./Components/StorePage/ItemCard/ItemCard.jsx";
import NotFoundPage from "./Router/NotFoundPage.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="store" element={<StorePage />} />
          <Route path="store/:category" element={<ItemPage />} />
          <Route path="store/:category/:id" element={<ItemCard />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

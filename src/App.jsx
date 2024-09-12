import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx"; // Assuming you have a NavBar component
import HomePage from "./Components/HomePage/HomePage.jsx";
import CartPage from "./Components/CartPage/CartPage.jsx";
import StorePage from "./Components/StorePage/StorePage.jsx";
import NotFoundPage from "./Router/NotFoundPage.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="store" element={<StorePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { MyProvider } from "./ShopContext.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import RoutesWrapper from "./RoutesWrapper.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <MyProvider>
      <div className={styles.navBar}>
        <NavBar />
      </div>
      <RoutesWrapper />
      <Footer />
    </MyProvider>
  );
}

export default App;

import { MyProvider } from "./ShopContext.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import RoutesWrapper from "./RoutesWrapper.jsx";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className={styles.app}>
      <MyProvider>
        <div className={styles.navBar}>
          <NavBar />
        </div>
        <div className={styles.routes}>
          <RoutesWrapper />
        </div>
        <Footer />
      </MyProvider>
    </div>
  );
}

export default App;

import styles from "./StorePage.module.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../../ShopContext";
import { useContext } from "react";

function StorePage() {
  const { products } = useContext(ShopContext);
  if (products.length === 0) return <p>Loading...</p>;
  return (
    <nav className={styles.collection}>
      <h1>Collection</h1>
      <div className={styles.menu}>
        <Link to="men's clothing" className={styles.categoryLink}>
          <div className={styles.categoryImg}>
            {products[1] && (
              <img src={products[1].image} alt="Men's Clothing" />
            )}
          </div>
          Men's Clothing
        </Link>
        <Link to="women's clothing" className={styles.categoryLink}>
          <div className={styles.categoryImg}>
            {products[14] && (
              <img src={products[14].image} alt="Women's Clothing" />
            )}
          </div>
          Women's Clothing
        </Link>
        <Link to="jewelery" className={styles.categoryLink}>
          <div className={styles.categoryImg}>
            {products[4] && <img src={products[4].image} alt="Jewelery" />}
          </div>
          Jewelery
        </Link>
      </div>
    </nav>
  );
}

export default StorePage;

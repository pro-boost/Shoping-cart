import { useContext } from "react";
import { ShopContext } from "../../../ShopContext";
import { useParams, Link } from "react-router-dom";
import styles from "./ItemPage.module.css";

function ItemPage() {
  const { handleClick, products } = useContext(ShopContext);
  const { category } = useParams();

  if (products.length === 0) return <p>Loading...</p>;

  return (
    <div className={styles.itemsContainer}>
      <h1>{category}</h1>
      {products
        .filter((product) => product.category === category)
        .map((product) => (
          <div key={product.id} className={styles.cardContainer}>
            <Link
              className={styles.linkContainer}
              to={`/store/${category}/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h1 className={styles.itemTitle}>{product.title}</h1>
              <p>{product.price} $</p>
            </Link>
            <button
              onClick={() => handleClick(product)} // Pass the specific product here
              className={styles.itemButton}>
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
}

export default ItemPage;

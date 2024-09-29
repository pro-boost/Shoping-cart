import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ItemPage.module.css";
import { Link } from "react-router-dom";

function ItemPage() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
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
              <button className={styles.itemButton}>Add to Cart</button>
            </div>
          ))}
      </div>
    </>
  );
}

export default ItemPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ItemCard.module.css";

function ItemCard({ handleClick }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Initialize to null

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.id === parseInt(id));
        setProduct(foundProduct);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.itemCardContainer}>
      <h1>{product.title}</h1>
      <div className={styles.productDetails}>
        <div className={styles.detailsLeft}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.detailsRight}>
          <p>{product.description}</p>
          <p className={styles.price}>{product.price} $</p>
          <button onClick={handleClick} className={styles.itemButton}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;

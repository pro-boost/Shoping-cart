import { Link } from "react-router-dom";
import styles from "./ItemCard.module.css";

function ItemCard({ imgSrc, title, price, id, category }) {
  return (
    <div className={styles.cardContainer}>
      <Link className={styles.linkContainer} to={`/store/${category}/${id}`}>
        <img src={imgSrc} alt={title} />
        <h1 className={styles.itemTitle}>{title}</h1>
        <p>{price} $</p>
      </Link>
      <button className={styles.itemButton}>Add to Cart</button>
    </div>
  );
}

export default ItemCard;

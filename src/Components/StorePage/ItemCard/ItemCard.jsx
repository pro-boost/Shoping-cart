import { Link } from "react-router-dom";
import styles from "./ItemCard.module.css";

function ItemCard() {
  return (
    <div className={styles.cardContainer}>
      <Link
        className={styles.linkContainer}
        to={`/store/${category}/${id}`}></Link>
      <button className={styles.itemButton}>Add to Cart</button>
    </div>
  );
}

export default ItemCard;

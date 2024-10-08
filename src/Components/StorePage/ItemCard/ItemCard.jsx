import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../../ShopContext";
import AddToCartToast from "../../PopUps/AddToCartToast";
import styles from "./ItemCard.module.css";

function ItemCard() {
  const { id } = useParams();
  const { product, products, setProduct, handleClick, showToast } =
    useContext(ShopContext);

  useEffect(() => {
    const productId = parseInt(id);
    const foundProduct = products.find((item) => item.id === productId);
    setProduct(foundProduct);
  }, [id, products, setProduct]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className={styles.itemCardContainer}>
      <div className={styles.productDetails}>
        <div className={styles.detailsLeft}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.detailsRight}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p className={styles.price}>{product.price} $</p>
          <button
            onClick={() => handleClick(product)}
            className={styles.itemButton}>
            Add to Cart
          </button>
        </div>
      </div>
      {showToast && <AddToCartToast />}
    </div>
  );
}

export default ItemCard;

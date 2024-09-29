import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ItemCard.module.css";

function ItemCard() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const foundIproduct = data.find((item) => item.id === parseInt(id));
        setProduct(foundIproduct);
      });
  }, [id]);
  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.cardContainer}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <p>{product.price} $</p>
      <button className={styles.itemButton}>Add to Cart</button>
    </div>
  );
}
export default ItemCard;

import { useEffect, useState, useContext } from "react";
import { ShopContext } from "../../../ShopContext";
import { useParams } from "react-router-dom";
import styles from "./ItemPage.module.css";
import { Link } from "react-router-dom";

function ItemPage() {
  const { handleClick } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
            <button onClick={handleClick} className={styles.itemButton}>
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
}

export default ItemPage;

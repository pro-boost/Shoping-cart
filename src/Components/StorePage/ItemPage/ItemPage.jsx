import ItemCard from "../ItemCard/ItemCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ItemPage.module.css";

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
            <ItemCard
              key={product.id}
              imgSrc={product.image}
              title={product.title}
              price={product.price}
              id={product.id} // Pass the product ID
              category={category} // Pass the category
            />
          ))}
      </div>
    </>
  );
}

export default ItemPage;

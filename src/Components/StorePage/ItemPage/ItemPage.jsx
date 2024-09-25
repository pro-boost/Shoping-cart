import ItemCard from "../ItemCard/ItemCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemPage.modules.css";

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
      <div className="store-container">
        {products
          .filter((product) => product.category === category)
          .map((product) => (
            <ItemCard
              key={product.id}
              imgSrc={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
      </div>
    </>
  );
}

export default ItemPage;

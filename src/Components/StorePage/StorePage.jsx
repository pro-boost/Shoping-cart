import ItemCard from "./ItemCard/ItemCard";
import { useEffect, useState } from "react";
import "./StorePage.css";
import TypeNav from "./TypeNav/TypeNav";

function StorePage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("men's clothing");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="typeNav">
        <TypeNav category={category} setCategory={setCategory} />
      </div>
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

export default StorePage;

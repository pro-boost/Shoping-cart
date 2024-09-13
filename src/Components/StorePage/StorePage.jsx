import ItemCard from "./ItemCard/ItemCard";
import { useEffect } from "react";
import { useState } from "react";
import "./StorePage.css";
function StorePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="store-container">
      {products.map((product) => (
        <ItemCard
          key={product.id}
          imgSrc={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default StorePage;
// setImgSrc(json.image);
// setTitle(json.title);
// setDesccription(json.description);
// setPrice(json.price);
// setId(json.id);

import { useState } from "react";
import "./ItemCard.css";

function ItemCard({ imgSrc, title, description, price }) {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="card-container">
      <img src={imgSrc} alt={title} />
      <h1 className="item-title">{title}</h1>
      <div className={`item-info ${isReadMore ? "expanded" : ""}`}>
        <p>{description}</p>
        <button className="read-more" onClick={toggleReadMore}>
          {isReadMore ? "Read Less" : "Read More"}
        </button>
        <p>{price} $</p>
        <button className="item-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ItemCard;

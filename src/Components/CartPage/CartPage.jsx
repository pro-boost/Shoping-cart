import styles from "./CartPage.module.css";
import { useContext, useState } from "react";
import { ShopContext } from "../../ShopContext";

function CartPage() {
  const { cart } = useContext(ShopContext);

  // Create a state to hold count for each item
  const [counts, setCounts] = useState(cart.map(() => 1));

  const updateCount = (index, increment) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = Math.max(1, newCounts[index] + increment); // Prevent count from going below 1
      return newCounts;
    });
  };

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  const totalPrice = cart.reduce((total, item, index) => {
    return total + item.price * counts[index];
  }, 0);

  return (
    <div>
      {cart.map((item, index) => (
        <div key={index} className={styles.itemCardContainer}>
          <h1>{item.title}</h1>
          <div className={styles.productDetails}>
            <div className={styles.detailsLeft}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className={styles.detailsRight}>
              <p className={styles.price}>{item.price} $</p>
              <div>
                <button
                  onClick={() => updateCount(index, -1)}
                  disabled={counts[index] <= 1}>
                  -
                </button>
                <span>{counts[index]}</span>
                <button onClick={() => updateCount(index, 1)}>+</button>
              </div>
              <button>Delete Item</button>
            </div>
          </div>
        </div>
      ))}
      <p>Total: {totalPrice}$</p>
      <button className={styles.checkoutButton}>Checkout</button>
    </div>
  );
}

export default CartPage;

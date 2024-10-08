import styles from "./CartPage.module.css";
import { useContext } from "react";
import { ShopContext } from "../../ShopContext";

function CartPage() {
  const { cart, counts, setCounts } = useContext(ShopContext);

  const updateCount = (index, increment) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = Math.max(1, newCounts[index] + increment);
      return newCounts;
    });
  };

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  const totalPrice = cart.reduce((total, item, index) => {
    return total + item.price * counts[index];
  }, 0);

  return (
    <div className={styles.cart}>
      {cart.map((item, index) => (
        <div key={index} className={styles.itemCardContainer}>
          <div className={styles.detailsLeft}>
            <img src={item.image} alt={item.title} />
          </div>
          <div className={styles.detailsRight}>
            <h1>{item.title}</h1>
            <div className={styles.price}>
              <p>{item.price} $</p>
              <div className={styles.counts}>
                <button
                  onClick={() => updateCount(index, -1)}
                  disabled={counts[index] <= 1}>
                  -
                </button>
                <span>{counts[index]}</span>
                <button onClick={() => updateCount(index, 1)}>+</button>
              </div>
            </div>
            <button className={styles.delete}>Delete Item</button>
          </div>
        </div>
      ))}
      <p>Total: {totalPrice}$</p>
      <button className={styles.checkoutButton}>Checkout</button>
    </div>
  );
}

export default CartPage;

import styles from "./CartPage.module.css";
import { useContext } from "react";
import { ShopContext } from "../../ShopContext";
import CheckoutToast from "../PopUps/CheckoutToast";
import DeleteToast from "../PopUps/DeleteToast";

function CartPage() {
  const {
    cart,
    counts,
    setCounts,
    handleDelete,
    handleToast,
    showToast,
    showDeleteToast,
  } = useContext(ShopContext);

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
        <div key={item.id} className={styles.itemCardContainer}>
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
            <button
              onClick={() => handleDelete(item.id)}
              className={styles.delete}>
              Delete Item
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
      <div className={styles.checkout}>
        <p>Total: {totalPrice.toFixed(2)}$</p>
        <button onClick={handleToast} className={styles.checkoutButton}>
          Checkout
        </button>
      </div>
      {showToast && <CheckoutToast />}
      {showDeleteToast && <DeleteToast />}
    </div>
  );
}

export default CartPage;

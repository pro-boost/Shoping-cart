import styles from "./CartPage.module.css";
import CartProduct from "./PurchaseCards/CartProducts";

function CartPage({ totalPrice }) {
  return (
    <div className={StyleSheet.CartContainer}>
      <CartProduct />
      <p className={styles.TotalPrice}>Total: {totalPrice}</p>
      <button className={styles.checkoutButton}>CheckOut</button>
    </div>
  );
}
export default CartPage;

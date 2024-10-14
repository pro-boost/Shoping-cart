import { useContext } from "react";
import { ShopContext } from "../../ShopContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import styles from "./Toast.module.css";

function AddToCartToast() {
  const { showToast, setShowToast } = useContext(ShopContext);

  return (
    <Link to="/cart" className={styles.link}>
      <ToastContainer className={`${styles.toastContainer} position-fixed`}>
        <Toast show={showToast} onClose={() => setShowToast(false)} animation>
          <Toast.Header>
            <strong className={`me-auto ${styles.toastHeader}`}>
              Notification
            </strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body className={styles.toastBody}>
            Item added to Cart!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Link>
  );
}

export default AddToCartToast;

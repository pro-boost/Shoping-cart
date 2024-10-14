import { useContext } from "react";
import { ShopContext } from "../../ShopContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import styles from "./Toast.module.css";

function CheckoutToast() {
  const { showToast, setShowToast } = useContext(ShopContext);

  return (
    <ToastContainer className={`${styles.toastContainer} position-fixed`}>
      <Toast show={showToast} onClose={() => setShowToast(false)} animation>
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>This is just a demo!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default CheckoutToast;

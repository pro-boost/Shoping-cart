import { useContext } from "react";
import { ShopContext } from "../../ShopContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function DeleteToast() {
  const { showDeleteToast, setShowDeleteToast } = useContext(ShopContext);

  return (
    <ToastContainer
      className="position-fixed"
      style={{
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1050,
      }}>
      <Toast
        show={showDeleteToast}
        onClose={() => setShowDeleteToast(false)}
        animation>
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>The product is deleted from the cart!</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default DeleteToast;

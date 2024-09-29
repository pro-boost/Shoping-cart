import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <div className="error">404 Not Found</div>
      <Link to="store">Go Home</Link>
    </div>
  );
}

export default NotFoundPage;

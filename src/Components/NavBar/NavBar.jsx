import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css"; // Ensure this file is correctly imported

function NavBar({ count }) {
  const location = useLocation();

  return (
    <Navbar expand="lg" bg="light" variant="light" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-auto">
          MyApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/store"
              className={
                location.pathname === "/store" ||
                location.pathname.startsWith("/store/")
                  ? "active-link"
                  : ""
              }>
              Store
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/cart"
              className={location.pathname === "/cart" ? "active-link" : ""}>
              Cart {count}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

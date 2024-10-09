import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ShopContext } from "../../ShopContext";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const { count } = useContext(ShopContext);
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      className="custom-navbar"
      expanded={expanded}>
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="me-auto"
          onClick={handleLinkClick}>
          ProBoost
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={handleToggle}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={handleLinkClick}
              className={location.pathname === "/" ? "active-link" : ""}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/store"
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
              className={location.pathname === "/cart" ? "active-link" : ""}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className={location.pathname === "/cart" ? "active-icon" : ""}
                />
                <span className="count">{count}</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

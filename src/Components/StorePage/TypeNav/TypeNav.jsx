import "./TypeNav.css";

function TypeNav({ category, setCategory }) {
  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-brand">Category Selector</div>
      <div className="navbar-nav">
        <button
          className={`nav-link ${
            category === "men's clothing" ? "active-link" : ""
          }`}
          onClick={() => changeCategory("men's clothing")}>
          Men's Clothing
        </button>
        <button
          className={`nav-link ${
            category === "women's clothing" ? "active-link" : ""
          }`}
          onClick={() => changeCategory("women's clothing")}>
          Women's Clothing
        </button>
        <button
          className={`nav-link ${
            category === "electronics" ? "active-link" : ""
          }`}
          onClick={() => changeCategory("electronics")}>
          Electronics
        </button>
      </div>
    </nav>
  );
}

export default TypeNav;

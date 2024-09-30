import styles from "./HomePage.module.css";
function HomePage() {
  return (
    <div className={styles.homepageContainer}>
      <h1>Welcome to Our Online Store</h1>
      <p>
        Discover a world of amazing products, handpicked just for you. Whether
        you're looking for the latest trends, must-have gadgets, or unique
        gifts, we've got something for everyone!
      </p>
      <h2>Why Shop With Us?</h2>
      <ul>
        <li>
          Top Quality: We offer only the best products, ensuring quality and
          satisfaction with every purchase.
        </li>
        <li>Fast Shipping: Get your items delivered quickly and securely.</li>
        <li>
          Exclusive Deals: Enjoy special offers and discounts that you won’t
          find anywhere else.
        </li>
        <li>Customer Support: Our friendly team is here to assist you 24/7.</li>
      </ul>
      <p>
        Start exploring our collections today and find everything you need in
        one place. Shop now and experience the best in online shopping!
      </p>
    </div>
  );
}

export default HomePage;

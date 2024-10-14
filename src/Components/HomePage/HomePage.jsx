import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.section}>
        <div className={styles.textContainer}>
          <h1>Welcome to Our Online Store</h1>
          <p>
            Discover a world of amazing products, handpicked just for you.
            Whether you're looking for the latest trends, must-have gadgets, or
            unique gifts, we've got something for everyone!
          </p>
        </div>
        <img
          src="/Shoping-cart/images/closet1.jpg"
          alt="store"
          className={styles.image}
        />
      </div>

      <div className={styles.section}>
        <img
          src="/Shoping-cart/images/closet2.jpg"
          alt="store"
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h1>Why Shop With Us?</h1>
          <ul>
            <li>
              Top Quality: We offer only the best products, ensuring quality and
              satisfaction with every purchase.
            </li>
            <li>
              Fast Shipping: Get your items delivered quickly and securely.
            </li>
            <li>
              Exclusive Deals: Enjoy special offers and discounts that you won’t
              find anywhere else.
            </li>
            <li>
              Customer Support: Our friendly team is here to assist you 24/7.
            </li>
          </ul>
          <p>
            Start exploring our collections today and find everything you need
            in one place. Shop now and experience the best in online shopping!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

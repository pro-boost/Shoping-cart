import styles from "./StorePage.module.css";
import StoreCategory from "../Category/StoreCategory";

function StorePage() {
  return (
    <>
      <div className={styles.typeNav}>
        <StoreCategory />
      </div>
    </>
  );
}

export default StorePage;

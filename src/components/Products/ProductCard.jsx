import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className={styles.toolbar}>
      {/* Desktop View */}
      <div className={styles.leftSection}>
        <span className={styles.itemCount}>3425 ITEMS</span>
        <span className={styles.filterToggle}>
          <span className={styles.arrow}><img src="./arrow-left.svg" alt="" /></span> HIDE FILTER
        </span>
      </div>

      {/* Mobile View */}
      <div className={styles.mobileFilter}>
        <span className={styles.mobileFilterText}>FILTER</span>
      </div>
      <span className={styles.verticalDivider}>|</span>
      
      <div className={styles.sortSection}>
        RECOMMENDED <span className={styles.dropdownIcon}><img src="./arrow-left.svg" alt="" /></span>
      </div>
    </div>
  );
};

export default ProductCard;

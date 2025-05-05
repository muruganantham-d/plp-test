'use client';
import React, { useState } from 'react';
import styles from './ProductCardClient.module.css';
import { useUser, SignInButton, SignedOut, SignedIn,  ClerkLoaded } from '@clerk/nextjs';

const ProductCardClient = ({ products }) => {
  const [showFilter, setShowFilter] = useState(true);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 823;
  console.log(products,"pppppppp");
  const { isSignedIn } = useUser();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.toolbar}>
        <div className={styles.leftSection}>
          <span className={styles.itemCount}>{products.length} ITEMS</span>
          <span className={styles.filterToggle} onClick={() => setShowFilter(!showFilter)}>
            <span className={styles.arrow}><img src="/arrow-left.svg" alt="" /></span>
            {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
          </span>
        </div>
        {/* Mobile View */}
        <div className={styles.mobileFilter} onClick={() => setShowFilter(!showFilter)}>
          <span className={styles.mobileFilterText}>FILTER</span>
        </div>
        <span className={styles.verticalDivider}>|</span>
        <div className={styles.sortSection}>
          RECOMMENDED <span className={styles.dropdownIcon}><img src="/arrow-left.svg" alt="" /></span>
        </div>
      </div>

      <div className={styles.contentWrapper}>
      {showFilter && (
  <aside className={`${styles.filterSidebar} ${isMobile ? styles.mobileFilterSidebar : ''}`}>
    {isMobile && (
      <div className={styles.filterClose} onClick={() => setShowFilter(false)}>
        ✕ Close
      </div>
    )}
    <div className={styles.checkbox}>
      <input type="checkbox" />
      <label>Customizable</label>
    </div>
    {[
  'IDEAL FOR', 'OCCASION', 'WORK', 'FABRIC',
  'SEGMENT', 'SUITABLE FOR', 'RAW MATERIALS', 'PATTERN'
].map(title => (
  <div key={title} className={styles.filterSection}>
    <div className={styles.sectionTitle}>
      {title}
      <span className={styles.dropdownIcon}>
        <img src="/arrow-left.svg" alt="dropdown" />
      </span>
    </div>
    <div className={styles.sectionValue}>All</div>
  </div>
))}

  </aside>
)}

        <section className={styles.productGrid} style={{ width: showFilter ? 'calc(100% - 250px)' : '100%' }}>
          {products.map(product => (
<div key={product.id} className={styles.card}>
  <div className={styles.imageWrapper}>
    <img
      src={product.image}
      alt={product.title}
      className={styles.productImage}
    />
  </div>
  <div className={styles.productInfo}>
    <div
      className={styles.productName}
      title={product.title}
    >
      {product.title}
    </div>
    {/* <div className={styles.signInText}>
      <a href="#">Sign in</a> or Create an account to see pricing
    </div> */}
    <ClerkLoaded>
          {isSignedIn ? (
        <p className={styles.price}>${product.price}</p>
      ) : (
        <div className={styles.signInText}>
          <SignInButton mode="modal">
            <span style={{ cursor: 'pointer', color: 'blue' }}>Sign in</span>
          </SignInButton>{' '}
          or Create an account to see pricing
        </div>
      )}
      </ClerkLoaded>

  </div>
  <div className={styles.wishlistIcon}><img src="/heart.svg" alt="Heart Icon" /></div>
</div>

          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductCardClient;

'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topRow}>
          <div className={styles.logoLeft}>
            <img
              src="/hamburger-menu.svg"
              alt="menu Logo"
              className={styles.menu_icon}
              onClick={() => setMenuOpen(prev => !prev)}
            />
            <img src="/app-logo.svg" alt="Left Logo" className={styles.icon} />
          </div>

          <div className={styles.logoCenter}>LOGO</div>

          <div className={styles.iconsRight}>
            <img src="/search-normal.svg" alt="Search Icon" />
            <img src="/heart.svg" alt="Heart Icon" />
            <img src="/shopping-bag.svg" alt="Shopping Bag Icon" />
            <img src="/profile.svg" alt="Profile Icon" className={styles.hideMobile} />
            <div className={`${styles.languageSelector} ${styles.hideMobile}`}>
              ENG <img src="/arrow-left.svg" />
            </div>
          </div>
        </div>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>

          {/* Extra items shown only in mobile menu */}
          <div className={styles.mobileOnlyMenuExtras}>
            <img src="/profile.svg" alt="Profile Icon" />
            <div className={styles.languageSelector}>
              ENG <img src="/arrow-left.svg" />
            </div>
          </div>
        </nav>
      </header>
      <div className={styles.divider} />
    </>
  );
}

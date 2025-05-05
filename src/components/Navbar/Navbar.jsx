'use client';

import { useState, useRef, useEffect } from 'react';
import { useUser, SignOutButton, SignInButton } from '@clerk/nextjs';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const { user, isSignedIn } = useUser();

  // Optional: Close modal on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
            {/* <img
              src="/profile.svg"
              alt="Profile Icon"
              className={styles.hideMobile}
              onClick={() => setProfileOpen(prev => !prev)}
            /> */}
            {isSignedIn ? (
  <img
    src="/profile.svg"
    alt="Profile Icon"
    className={styles.hideMobile}
    onClick={() => setProfileOpen(prev => !prev)}
  />
) : (
  <SignInButton mode="modal">
    <img
      src="/profile.svg"
      alt="Profile Icon"
      className={styles.hideMobile}
      style={{ cursor: 'pointer' }}
    />
  </SignInButton>
)}
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

          <div className={styles.mobileOnlyMenuExtras}>
            <img src="/profile.svg" alt="Profile Icon" />
            <div className={styles.languageSelector}>
              ENG <img src="/arrow-left.svg" />
            </div>
          </div>
        </nav>
      </header>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Profile Dropdown Modal */}

      {profileOpen && isSignedIn && (
        <div className={styles.profileModal} ref={profileRef}>
          <div className={styles.modalHeader}>
            <span>User Profile</span>
            <button onClick={() => setProfileOpen(false)} className={styles.closeBtn}>×</button>
          </div>
          <div className={styles.userInfo}>
            <p><strong>{user.fullName}</strong></p>
            <p>{user.primaryEmailAddress?.emailAddress}</p>
          </div>
          <SignOutButton>
            <button className={styles.logoutBtn}>Logout</button>
          </SignOutButton>
        </div>
      )}

    </>
  );
}

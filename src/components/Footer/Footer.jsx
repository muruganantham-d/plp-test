import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Section - Newsletter and Contact */}
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <h3 className={styles.sectionTitle}>BE THE FIRST TO KNOW</h3>
          <p className={styles.sectionSubtitle}>Sign up for updates from mettā muse.</p>
          <div className={styles.emailInput}>
            <input type="email" placeholder="Enter your e-mail..." className={styles.inputField} />
            <button className={styles.subscribeButton}>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contactSection}>
          <h4 className={styles.sectionTitle}>CONTACT US</h4>
          <p className={styles.contactInfo}>+44 221 133 5360</p>
          <p className={styles.contactInfo}>customercare@mettamus.e.com</p>
          
          <h4 className={styles.currencyTitle}>CURRENCY</h4>
          <p className={styles.currency}>   <img className={styles.usaFlag} src="/footer/usaFlag.svg" alt="FlagLogo" /><strong>USD</strong></p>
          <p className={styles.currencyNote}>Transactions will be completed in Euros and a currency reference is available on heret.</p>
        </div>
      </div>

      <div className={styles.divider}></div>

      {/* Main Footer Content */}
      <div className={styles.footerContent}>
        {/* Mettā Muse Links */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>mettā muse</h4>
          {/* <div className={styles.doubleColumnLinks}> */}
          <div className={styles.singleColumnLinks}>
            {/* <div className={styles.column}> */}
              <a href="#">About Us</a>
              <a href="#">Stories</a>
              <a href="#">Artisans</a>
              <a href="#">Boutiques</a>
              <a href="#">Contact Us</a>
              <a href="#">EU Compliances Docs</a>
            {/* </div> */}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>QUICK LINKS</h4>
          <div className={styles.singleColumnLinks}>
            <a href="#">Orders & Shipping</a>
            <a href="#">Join/Login as a Seller</a>
            <a href="#">Payment & Pricing</a>
            <a href="#">Return & Refunds</a>
            <a href="#">FAQs</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>

        {/* Follow Us & Payment Methods */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>FOLLOW US</h4>
          <div className={styles.socialIcons}>
          <img className={styles.instaIcons} src="/footer/Insta.svg" alt="Insta Logo"/>
          <img src="/footer/linkedin.svg" alt="linkedin Logo"/>
          </div>
          
          <h4 className={styles.sectionTitle}>mettā muse ACCEPTS</h4>
          <div className={styles.paymentMethods}>
            <span>Pay</span>
            <div className={styles.paymentIcons}>
              <span><img src="/footer/gpay.svg" alt="gpay"/> </span>
              <span><img src="/footer/master.svg" alt="master"/> </span>
              <span><img src="/footer/paypal.svg" alt="paypal"/> </span>
              <span><img  className={styles.amex} src="/footer/amex.svg" alt="amex"/> </span>
              <span><img src="/footer/applePay.svg" alt="applepay"/> </span>
              <span><img  className={styles.opay} src="/footer/opay.svg" alt="opay"/> </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divider}></div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>Copyright © 2023 mettamus.e. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Content from "@/components/content/Content";
import ProductCard from "@/components/Products/ProductCard";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
     <Navbar />
      <div className={styles.page}>
          <Content/>
          <ProductCard/>
      </div>
      <Footer/>
    </>
  );
}

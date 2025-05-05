import { getProducts } from "@/lib/api";
import ProductCardClient from "./ProductCardClient";

const ProductCardPage = async () => {
  const products = await getProducts();
  return <ProductCardClient products={products} />;
};

export default ProductCardPage;

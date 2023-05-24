import ProductList from "@/components/ProductList";
import { products } from "../data";

const ProductPage = () => {
  console.log(products);
  return `<div class="container">
  <div class="row">
     ${ProductList({products})}
  </div></div>`;
};

export default ProductPage;
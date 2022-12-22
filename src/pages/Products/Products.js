import React from "react";
import ProductCard from "../../components/productCard/productCard";
import { products } from "../../Product";
import "./style.scss";

const Products = ({ cartItems, setCartItems }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          data={product}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
};

export default Products;

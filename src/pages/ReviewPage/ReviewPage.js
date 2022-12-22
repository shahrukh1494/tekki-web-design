import React from "react";
import ProductCard from "../../components/productCard/productCard";
import "./style.scss";

const ReviewPage = ({ cartItems, firstName, lastName, email, phoneNumber }) => {
  return (
    <>
      <div className="product-list">
        {cartItems.map((product) => (
          <ProductCard
            key={product.id}
            data={product}
            cartItems={cartItems}
            cartMode={true}
          />
        ))}
      </div>
      <div className="details">
        <div>FirstName : {firstName}</div>
        <div>LastName : {lastName}</div>
        <div>Email : {email}</div>
        <div>Phone Number : {phoneNumber}</div>
        <button className="submit-button">Submit</button>
      </div>
    </>
  );
};

export default ReviewPage;

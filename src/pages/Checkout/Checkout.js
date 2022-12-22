import React from "react";
import ProductCard from "../../components/productCard/productCard";
import Form from "../../components/Form/Form";
import "./style.scss";

const Checkout = ({
  cartItems,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
}) => {
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="empty-cart">No Items in the cart</div>
      ) : (
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
          <Form
            cartItems={cartItems}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        </>
      )}
    </>
  );
};

export default Checkout;

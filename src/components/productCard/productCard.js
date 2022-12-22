import { useState } from "react";
import "./style.scss";

const ProductCard = ({ cartItems, data, setCartItems, cartMode }) => {
  const [disableItem, setDisabledItem] = useState(false);

  const handleCart = (data) => {
    setDisabledItem((prev) => !prev);
    setCartItems([...cartItems, data]);
  };

  return (
    <div className="product-card">
      <div className="card-content">
        <div className="image-container">
          <img src={data.image} alt="" />
        </div>
        <div className="details-container">
          <div className="name">{data.title}</div>
          <div className="desc">{data.category}</div>
          <div className="price">${data.price}</div>
        </div>
      </div>
      <div className="buttons">
        <>
          {!cartMode && (
            <button
              disabled={disableItem}
              className={`${disableItem ? "disabled-button" : ""} add-to-cart`}
              onClick={() => handleCart(data)}
            >
              Add to cart
            </button>
          )}
        </>
      </div>
    </div>
  );
};

export default ProductCard;

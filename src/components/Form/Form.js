import React, { useState } from "react";
import "./style.scss";

import { useNavigate } from "react-router-dom";

const Form = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
}) => {
  const navigate = useNavigate();
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      setPhoneError("Please enter a valid phone number");
      return;
    }
    navigate("/review-and-submit");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-line">
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-line">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      {phoneError && <span>{phoneError}</span>}
      <input type="submit" value="Checkout" />
    </form>
  );
};

export default Form;

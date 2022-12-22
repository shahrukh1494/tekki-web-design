import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import { useState } from "react";
import Header from "./components/header/header";
import Checkout from "./pages/Checkout/Checkout";
import ReviewPage from "./pages/ReviewPage/ReviewPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="App">
      <Router>
        <Header cart={cartItems} />
        <Routes>
          <Route
            path="/"
            element={
              <Products cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
          <Route
            path="/cart"
            element={
              <Checkout
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
            }
          />
          <Route
            path="/review-and-submit"
            element={
              <ReviewPage
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
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

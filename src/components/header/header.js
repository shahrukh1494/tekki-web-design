import "./style.scss";

import { NavLink } from "react-router-dom";

const Header = ({ cart }) => {
  return (
    <div className="header">
      <div className="header__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "header__link " + (isActive ? "active-link" : "")
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            "header__link " + (isActive ? "active-link" : "")
          }
        >
          View Cart ({cart.length})
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";
// import logo from "../images/logo.png";
import cartImg from "../images/cart.svg";

const Nav = () => {
  const { cart, setCart } = useContext(UserContext);
  const entries = Object.entries(cart);
  const values = Object.values(cart);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header>
      <div className="logo">{/* <img src={logo} className="logo" /> */}</div>
      <div className="mobile" onClick={handleClick}>
        ☰
      </div>
      <nav className={click ? "navbar active" : "navbar"}>
        <ul className="nav">
          <li className="nav-link">
            <NavLink
              exact
              to={"/"}
              // to={`${process.env.PUBLIC_URL}/`}
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              exact
              to={"/products"}
              // to={`${process.env.PUBLIC_URL}/products`}
              activeClassName="active"
            >
              Shop
            </NavLink>
          </li>
        </ul>
        <NavLink
          to={"/cart"}
          // to={`${process.env.PUBLIC_URL}/cart`}
          exact={true}
          className="cart-symbol"
          activeClassName="active"
        >
          <span className="nav-span">
            {entries.length === 0 ? 0 : values.reduce((a, b) => a + b)}
          </span>
          <img src={cartImg} alt="cart" id="nav-img" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;

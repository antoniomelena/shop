import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { UserContext } from '../App';
import logo from '../images/logo.webp';

const Nav = () => {
  const { cart } = useContext(UserContext);
  const entries = Object.entries(cart);
  const values = Object.values(cart);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header>
      <div className="container container--nav row">
        <button className="nav-toggle btn" onClick={handleClick} type="button">
          ☰
        </button>
        <Link exact to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <nav className={click ? 'nav nav--visible' : 'nav'}>
          <ul className="nav__list nav__list--primary">
            <li className="nav__item">
              <NavLink
                exact
                to="/"
                className="nav__link"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                exact
                to="/products"
                className="nav__link"
                activeClassName="active"
              >
                Shop
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                exact
                to="/cart"
                className="nav__link nav__link--relative"
                activeClassName="active"
              >
                <AiOutlineShoppingCart />
                <span className="nav__span">
                  {entries.length === 0 ? 0 : values.reduce((a, b) => a + b)}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

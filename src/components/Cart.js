import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../App';
import Catalog from '../catalog.json';
import charcoal from '../images/charcoal.webp';
import cocoaMint from '../images/cocoa-mint.webp';
import oatsHoney from '../images/oats&honey.webp';
import lavender from '../images/lavender.webp';
import jasmine from '../images/jasmine-gardenia.webp';
import seaSaltKelp from '../images/sea-salt-kelp.webp';

const Cart = () => {
  const { cart, setCart } = useContext(UserContext);
  const cartArr = Object.entries(cart);
  const cartValues = Object.values(cart);
  const [cartTotal, setCartTotal] = useState(0);

  const cartCalculation = () => {
    let sum = 0;
    let keys = Object.keys(cart);
    keys.forEach((name, idx) => {
      let product = Catalog.find((prod) => prod.name === name);
      let price = product.price;
      let total = Object.values(cart)[idx] * price;
      sum += total;
    });
    setCartTotal(sum);
  };

  const checkOut = () => {
    setCart({});
    setCartTotal(0);
  };

  useEffect(() => {
    cartCalculation();
  }, [cart]);

  return (
    <div className="cart">
      <div className="container">
        {cartTotal === 0 ? (
          <h1 className="empty-cart">Your cart is empty.</h1>
        ) : (
          <div className="row cart__row">
            <div className="cart-cards">
              <h2 className="cart__title">Shopping Cart</h2>
              {cartArr.map(
                (item, idx) =>
                  item[1] > 0 && (
                    <Card
                      key={idx}
                      selItem={Catalog.find(
                        (x) => x.name === Object.keys(cart)[idx]
                      )}
                      initialQuantity={cartValues[idx]}
                    />
                  )
              )}
            </div>
            <div className="cart__total">
              <h4>Subtotal: ${cartTotal.toFixed(2)}</h4>
              <button
                className="form__btn check-out__btn btn"
                onClick={checkOut}
              >
                Check Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Card = (props) => {
  const { initialQuantity, selItem } = props;
  const name = selItem.name;
  const { cart, setCart } = useContext(UserContext);
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleChange = ({ target }) => {
    setQuantity(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCart({ ...cart, [name]: parseInt(quantity, 10) });
    document.getElementById('cart-form').reset();
  };

  const find = (param) => {
    switch (param) {
      case 'charcoal':
        return (
          <img src={charcoal} alt="charcoal soap bar" className="cart__img" />
        );
      case 'cocoa-mint':
        return (
          <img
            src={cocoaMint}
            alt="cocoa mint soap bar"
            className="cart__img"
          />
        );
      case 'jasmine-gardenia':
        return (
          <img src={jasmine} alt="jasmine soap bar" className="cart__img" />
        );
      case 'sea-salt-kelp':
        return (
          <img
            src={seaSaltKelp}
            alt="sea salt kelp soap bar"
            className="cart__img"
          />
        );
      case 'lavender':
        return (
          <img src={lavender} alt="lavender soap bar" className="cart__img" />
        );
      case 'oats&honey':
        return (
          <img
            src={oatsHoney}
            alt="oats and honey soap bar"
            className="cart__img"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="cart--card">
      {find(selItem.id)}
      <div className="cart__card-text">
        <div className="card--cart-txt">{selItem.name}</div>
        <div className="card--cart-txt">${selItem.price.toFixed(2)}</div>
        <form id="cart-form" className="card-form" onSubmit={handleSubmit}>
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            min="0"
            max="50"
            onChange={handleChange}
            required
          />
          <button type="submit" className="form__btn btn">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;

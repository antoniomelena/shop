import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import Catalog from "../catalog.json";
import black from "../images/black.jpg";
import coffee from "../images/coffee.jpg";
import brown from "../images/brown.jpg";
import brightpink from "../images/brightpink.jpg";
import pink from "../images/pink.jpg";
import white from "../images/white.jpg";

const Cart = () => {
  const { cart, setCart } = useContext(UserContext);
  const cartArr = Object.entries(cart);
  const cartValues = Object.values(cart);
  const [cartTotal, setCartTotal] = useState(null);

  const cartCalculation = () => {
    let sum = 0;
    Object.keys(cart).map((name, idx) => {
      let product = Catalog.find((prod) => prod.name === name);
      let price = product.price;
      let total = Object.values(cart)[idx] * price;
      sum += total;
      setCartTotal(sum.toFixed(2));
    });
  };

  const checkOut = () => {
    setCart({});
    setCartTotal(null);
  };

  useEffect(() => {
    cartCalculation();
  }, [cart]);

  console.log(cartArr);
  return (
    <div className="cart">
      {cartArr.map((item, idx) => (
        <div key={idx} className="cardfb">
          {item[1] > 0 && (
            <Card
              selItem={Catalog.find((x) => x.name === Object.keys(cart)[idx])}
              initialQuantity={cartValues[idx]}
            />
          )}
        </div>
      ))}
      {cartTotal === null ? (
        <h1 className="empty-cart">Your cart is empty.</h1>
      ) : (
        <div className="cartFooter">
          <div>Total: ${cartTotal}</div>
          <button className="check-out-btn btn" onClick={checkOut}>
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

const Card = (props) => {
  const { initialQuantity, selItem } = props;
  const name = selItem.name;
  const product = Catalog.find((prod) => prod.name === name);
  const price = product.price;
  const { cart, setCart } = useContext(UserContext);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [total, setTotal] = useState((price * quantity).toFixed(2));

  const handleChange = ({ target }) => {
    setQuantity(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCart({ ...cart, [name]: parseInt(quantity) });
    const num = price * quantity;
    setTotal(num.toFixed(2));
    document.getElementById("cart-form").reset();
  };

  const find = (param) => {
    switch (param) {
      case "black":
        return <img src={black} alt="black" className="responsive" />;
        break;
      case "coffee":
        return <img src={coffee} alt="coffee" className="responsive" />;
        break;
      case "pink":
        return <img src={pink} alt="pink" className="responsive" />;
        break;
      case "white":
        return <img src={white} alt="white" className="responsive" />;
        break;
      case "bright pink":
        return (
          <img src={brightpink} alt="bright pink" className="responsive" />
        );
        break;
      case "brown":
        return <img src={brown} alt="brown" className="responsive" />;
        break;
      default:
        return null;
    }
  };

  return (
    <div className="cart--card">
      {find(selItem.id)}
      <div className="card-section">
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
          <button type="submit" className="form-btn btn">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;

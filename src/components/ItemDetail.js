import React, { useState, useContext } from "react";
import Catalog from "../catalog.json";
import { UserContext } from "../App";
import black from "../images/black.jpg";
import coffee from "../images/coffee.jpg";
import brown from "../images/brown.jpg";
import brightpink from "../images/brightpink.jpg";
import pink from "../images/pink.jpg";
import white from "../images/white.jpg";

const ItemDetail = ({ match }) => {
  const { cart, setCart } = useContext(UserContext);
  const random = Catalog.find((x) => x.id === match.params.id);
  const [item, setItem] = useState(random);
  const [quantity, setQuantity] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cart.hasOwnProperty(item.name)) {
      setCart({ ...cart, [item.name]: parseInt(quantity) });
    } else {
      setCart({
        ...cart,
        [item.name]: (cart[item.name] += parseInt(quantity)),
      });
    }
    document.getElementById("quantity-form").reset();
  };
  const handleChange = ({ target }) => {
    setQuantity(target.value);
  };

  const find = (param) => {
    switch (param) {
      case "black":
        return (
          <div className="detail-img">
            <img src={black} alt="black" className="responsive" />
          </div>
        );
        break;
      case "coffee":
        return (
          <div className="detail-img">
            <img src={coffee} alt="coffee" className="responsive" />
          </div>
        );
        break;
      case "pink":
        return (
          <div className="detail-img">
            <img src={pink} alt="pink" className="responsive" />
          </div>
        );
        break;
      case "white":
        return (
          <div className="detail-img">
            <img src={white} alt="white" className="responsive" />
          </div>
        );
        break;
      case "bright pink":
        return (
          <div className="detail-img">
            <img src={brightpink} alt="bright pink" className="responsive" />
          </div>
        );
        break;
      case "brown":
        return (
          <div className="detail-img">
            <img src={brown} alt="brown" className="responsive" />
          </div>
        );
        break;
      default:
        return null;
    }
  };

  return (
    <div className="item-detail">
      {find(item.id)}
      <div className="form-nd-text">
        <div className="item-text">
          <h1>{item.name}</h1>
          <h2>${item.price}</h2>
        </div>
        <form id="quantity-form" onSubmit={handleSubmit}>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="50"
            onChange={handleChange}
            required
          />
          <button className="form-btn btn" type="submit">
            Add To Cart
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemDetail;

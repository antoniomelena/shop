import React, { useState, useContext } from 'react';
import Catalog from '../catalog.json';
import { UserContext } from '../App';
import charcoal from '../images/charcoal.webp';
import cocoaMint from '../images/cocoa-mint.webp';
import oatsHoney from '../images/oats&honey.webp';
import lavender from '../images/lavender.webp';
import jasmine from '../images/jasmine-gardenia.webp';
import seaSaltKelp from '../images/sea-salt-kelp.webp';

const ShopCard = ({ id, name, price }) => {
  const { cart, setCart } = useContext(UserContext);
  const [quantity, setQuantity] = useState(null);
  const item = Catalog.find((x) => x.id === id);

  const find = (param) => {
    switch (param) {
      case 'charcoal':
        return (
          <img src={charcoal} alt="charcoal soap bar" className="responsive" />
        );
      case 'cocoa-mint':
        return (
          <img
            src={cocoaMint}
            alt="cocoa-mint soap bar"
            className="responsive"
          />
        );
      case 'jasmine-gardenia':
        return (
          <img src={jasmine} alt="jasmine soap bar" className="responsive" />
        );
      case 'sea-salt-kelp':
        return (
          <img
            src={seaSaltKelp}
            alt="sea-salt-kelp soap bar"
            className="responsive"
          />
        );
      case 'lavender':
        return (
          <img src={lavender} alt="lavender soap bar" className="responsive" />
        );
      case 'oats&honey':
        return (
          <img
            src={oatsHoney}
            alt="oats and honey soap bar"
            className="responsive"
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cart.hasOwnProperty(item.name)) {
      setCart({ ...cart, [item.name]: parseInt(quantity, 10) });
    } else {
      setCart({
        ...cart,
        [item.name]: (cart[item.name] += parseInt(quantity, 10)),
      });
    }
    document.querySelector('.product-form').reset();
  };

  const handleChange = ({ target }) => {
    setQuantity(target.value);
  };

  return (
    <div className="card">
      <div className="img-box">{find(id)}</div>
      <div className="card-text">
        <h4>{name}</h4>
        <p>from ${price}</p>
      </div>
      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="50"
          onChange={handleChange}
          required
        />
        <button className="button form-button check-out-button" type="submit">
          Add To Cart
        </button>
      </form>
    </div>
  );
};

export default ShopCard;

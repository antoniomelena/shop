import React, { useState, useContext } from 'react';
import Catalog from '../catalog.json';
import { UserContext } from '../App';
import charcoal from '../images/charcoal.webp';
import cocoaMint from '../images/cocoa-mint.webp';
import oatsHoney from '../images/oats&honey.webp';
import lavender from '../images/lavender.webp';
import jasmine from '../images/jasmine-gardenia.webp';
import seaSaltKelp from '../images/sea-salt-kelp.webp';

const ItemDetail = ({ match }) => {
  const { cart, setCart } = useContext(UserContext);
  const [quantity, setQuantity] = useState(null);
  const item = Catalog.find((x) => x.id === match.params.id);

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
    document.querySelector('.product__form').reset();
  };
  const handleChange = ({ target }) => {
    setQuantity(target.value);
  };

  const find = (param) => {
    switch (param) {
      case 'charcoal':
        return (
          <img src={charcoal} alt="charcoal soap bar" className="detail" />
        );
      case 'cocoa-mint':
        return (
          <img src={cocoaMint} alt="cocoa mint soap bar" className="detail" />
        );
      case 'jasmine-gardenia':
        return <img src={jasmine} alt="jasmine soap bar" className="detail" />;
      case 'sea-salt-kelp':
        return (
          <img
            src={seaSaltKelp}
            alt="sea salt kelp soap bar"
            className="detail"
          />
        );
      case 'lavender':
        return (
          <img src={lavender} alt="lavender soap bar" className="detail" />
        );
      case 'oats&honey':
        return (
          <img
            src={oatsHoney}
            alt="oats and honey soap bar"
            className="detail"
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="product__section">
      <div className="container ">
        <div className="row row--center">
          <div className=" col-img">{find(item.id)}</div>
          <div className=" col-info">
            <h1>{item.name}</h1>
            <h3>${item.price}</h3>
            <form className="product__form" onSubmit={handleSubmit}>
              <label htmlFor="quantity">Quantity: </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="50"
                onChange={handleChange}
                required
              />
              <button className="form__btn btn" type="submit">
                Add To Cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;

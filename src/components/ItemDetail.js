import React, { useState, useContext } from 'react';
import Catalog from '../catalog.json';
import { UserContext } from '../App';
import black from '../images/black.webp';
import coffee from '../images/coffee.webp';
import brown from '../images/brown.webp';
import brightpink from '../images/brightpink.webp';
import pink from '../images/pink.webp';
import white from '../images/white.webp';
// import pizza from "../images/pizza.jpg";

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
      case 'black':
        return <img src={black} alt="black" className="detail" />;
      case 'coffee':
        return <img src={coffee} alt="coffee" className="detail" />;
      case 'pink':
        return <img src={pink} alt="pink" className="detail" />;
      case 'white':
        return <img src={white} alt="white" className="detail" />;
      case 'bright pink':
        return <img src={brightpink} alt="bright pink" className="detail" />;
      case 'brown':
        return <img src={brown} alt="brown" className="detail" />;
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

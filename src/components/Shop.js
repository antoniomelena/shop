import React, { useState } from "react";
import { Link } from "react-router-dom";
import Catalog from "../catalog.json";
import black from "../images/black.jpg";
import coffee from "../images/coffee.jpg";
import brown from "../images/brown.jpg";
import brightpink from "../images/brightpink.jpg";
import pink from "../images/pink.jpg";
import white from "../images/white.jpg";

const Shop = () => {
  const [items, setItems] = useState(Catalog);

  const find = (param) => {
    switch (param) {
      case "black":
        return (
          <div className="icon">
            <img src={black} alt="black" className="responsive" />
          </div>
        );
        break;
      case "coffee":
        return (
          <div className="icon">
            <img src={coffee} alt="coffee" className="responsive" />
          </div>
        );
        break;
      case "pink":
        return (
          <div className="icon">
            <img src={pink} alt="pink" className="responsive" />
          </div>
        );
        break;
      case "white":
        return (
          <div className="icon">
            <img src={white} alt="white" className="responsive" />
          </div>
        );
        break;
      case "bright pink":
        return (
          <div className="icon">
            <img src={brightpink} alt="brightpink" className="responsive" />
          </div>
        );
        break;
      case "brown":
        return (
          <div className="icon">
            <img src={brown} alt="brown" className="responsive" />
          </div>
        );
        break;
      default:
        return null;
    }
  };

  return (
    <div className="shop">
      <div className="hero">
        <div className="intro-content">
          <p>Lorem ipsum dolor sit amet.</p>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a optio
            sequi inventore odio maxime!
          </h2>
        </div>
      </div>
      <div className="container">
        {items.map((item) => (
          <div key={item.id} className="card">
            <Link to={process.env.PUBLIC_URL + `/shop/${item.id}`}>
              {find(item.id)}
              <h3>{item.name}</h3>
              <p>from ${item.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

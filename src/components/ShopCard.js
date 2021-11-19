import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import black from "../images/black.webp";
import coffee from "../images/coffee.webp";
import brown from "../images/brown.webp";
import brightpink from "../images/brightpink.webp";
import pink from "../images/pink.webp";
import white from "../images/white.webp";

const ShopCard = ({ id, name, price, votes, onVote }) => {
  const find = (param) => {
    switch (param) {
      case "black":
        return <img src={black} alt="black soap bar" className="responsive" />;
      case "coffee":
        return (
          <img src={coffee} alt="coffee soap bar" className="responsive" />
        );
      case "pink":
        return <img src={pink} alt="pink soap bar" className="responsive" />;
      case "white":
        return <img src={white} alt="white soap bar" className="responsive" />;
      case "bright pink":
        return (
          <img
            src={brightpink}
            alt="brightpink soap bar"
            className="responsive"
          />
        );
      case "brown":
        return <img src={brown} alt="brown soap bar" className="responsive" />;
      default:
        return null;
    }
  };

  const handleUpVote = () => {
    onVote(id);
  };
  return (
    <div className="card">
      <div className="heart">
        <a onClick={handleUpVote}>
          <AiFillHeart className="heart-icon" />
        </a>
        <p>{votes}</p>
      </div>
      <Link to={`/products/${id}`}>
        <div className="img-box">{find(id)}</div>
        <div className="card-text">
          <h4>{name}</h4>
          <p>from ${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ShopCard;

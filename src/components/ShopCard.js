import React from "react";
import { FaThumbsUp } from "react-icons/fa";
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
        return (
          <div className="icon">
            <img src={black} alt="black soap bar" className="responsive" />
          </div>
        );
        break;
      case "coffee":
        return (
          <div className="icon">
            <img src={coffee} alt="coffee soap bar" className="responsive" />
          </div>
        );
        break;
      case "pink":
        return (
          <div className="icon">
            <img src={pink} alt="pink soap bar" className="responsive" />
          </div>
        );
        break;
      case "white":
        return (
          <div className="icon">
            <img src={white} alt="white soap bar" className="responsive" />
          </div>
        );
        break;
      case "bright pink":
        return (
          <div className="icon">
            <img
              src={brightpink}
              alt="brightpink soap bar"
              className="responsive"
            />
          </div>
        );
        break;
      case "brown":
        return (
          <div className="icon">
            <img src={brown} alt="brown soap bar" className="responsive" />
          </div>
        );
        break;
      default:
        return null;
    }
  };

  const handleUpVote = () => {
    onVote(id);
  };
  return (
    <div className="card">
      <Link to={process.env.PUBLIC_URL + `/shop/${id}`}>
        {find(id)}
        <h3>{name}</h3>
        <p>from ${price}</p>
      </Link>
      <div>
        <a onClick={handleUpVote}>
          <FaThumbsUp className="fa-icon" />
        </a>
        {votes}
      </div>
    </div>
  );
};

export default ShopCard;

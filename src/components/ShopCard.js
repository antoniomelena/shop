import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import charcoal from '../images/charcoal.webp';
import cocoaMint from '../images/cocoa-mint.webp';
import oatsHoney from '../images/oats&honey.webp';
import lavender from '../images/lavender.webp';
import jasmine from '../images/jasmine-gardenia.webp';
import seaSaltKelp from '../images/sea-salt-kelp.webp';

const ShopCard = ({ id, name, price, votes, onVote }) => {
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

  const handleUpVote = () => {
    onVote(id);
  };
  return (
    <div className="card">
      <div className="heart">
        <AiFillHeart className="heart-icon" onClick={handleUpVote} />
        <p>{votes}</p>
      </div>
      <Link to={`/shop/${id}`}>
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

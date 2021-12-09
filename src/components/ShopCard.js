import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import charcoal from '../images/charcoal.webp';
import coffee from '../images/coffee.webp';
import brown from '../images/brown.webp';
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
      case 'coffee':
        return (
          <img src={coffee} alt="coffee soap bar" className="responsive" />
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
      case 'brown':
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
        <AiFillHeart className="heart-icon" onClick={handleUpVote} />
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

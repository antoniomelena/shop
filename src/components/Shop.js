import React, { useState } from 'react';
import Catalog from '../catalog.json';
import ShopCard from './ShopCard';
import SearchBar from './SearchBar';

const Shop = () => {
  const [items, setItems] = useState(Catalog);
  const [filterText, setFilterText] = useState('');

  const handleUpVote = (productId) => {
    const newItems = items.map((item) => {
      if (item.id === productId) {
        return Object.assign({}, item, {
          votes: item.votes + 1,
        });
      } else {
        return item;
      }
    });
    setItems(newItems);
  };

  const handleFilterChange = (filterText) => {
    setFilterText(filterText);
  };

  // const newItems = items.sort((a, b) => b.votes - a.votes);

  let cards = [];
  items.forEach((item) => {
    if (item.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    cards.push(
      <ShopCard
        key={item.id}
        id={item.id}
        name={item.name}
        price={item.price.toFixed(2)}
        // votes={item.votes}
        // onVote={handleUpVote}
      />
    );
  });

  return (
    <div className="shop">
      <div className="container">
        <SearchBar
          filterText={filterText}
          handleFilterChange={handleFilterChange}
        />
        <div className="grid">{cards}</div>
      </div>
    </div>
  );
};

export default Shop;

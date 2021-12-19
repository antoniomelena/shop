import React, { useState } from 'react';
import Catalog from '../catalog.json';
import ShopCard from './ShopCard';
import SearchBar from './SearchBar';

const Shop = function () {
  const [items] = useState(Catalog);
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (text) => {
    setFilterText(text);
  };

  const cards = [];
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

import React, { useState, createContext } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ItemDetail from './components/ItemDetail';

export const App = () => {
  const [cart, setCart] = useState({});

  return (
    <HashRouter>
      <UserContext.Provider value={{ cart, setCart }}>
        <Nav />
        <Switch>
          <Route exact path="/products/:id" component={ItemDetail} />
          <Route path="/products" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
        </Switch>
      </UserContext.Provider>
    </HashRouter>
  );
};

export const UserContext = createContext(null);

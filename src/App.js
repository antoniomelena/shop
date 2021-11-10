import React, { useState, createContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";

export const App = () => {
  const [cart, setCart] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ cart, setCart }}>
        <Nav />
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/shop/:id"}
            component={ItemDetail}
          />
          <Route path={`${process.env.PUBLIC_URL}/products`} component={Shop} />
          <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart} />
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export const UserContext = createContext(null);

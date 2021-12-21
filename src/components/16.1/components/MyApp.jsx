import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import HomePage from "./HomePage.components";
import Product from "./Products.components";
import ProductDetails from "./ProductDetails.componenets";

const Home = () => {
  return <HomePage />;
};
const Porduct = () => {
  return <Product />;
};

const PorductDetails = () => {
    return<ProductDetails/>;
  };
const MyApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/product"  component={Porduct} />
        <Route path="/products/:id"  component={PorductDetails} />

      </BrowserRouter>
    </div>
  );
};

export default MyApp;

import React from "react";
import Header from "./Header.components";
import products from "../../../store";
import "./HomePage.style.css";
import { Link } from "react-router-dom";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: "",
        };
      }
    
      componentDidMount() {
        this.setState({ id: products.id });
      }
    getAllProducts = (products) => {
        return products.map((el) => {
          return (
            <Link key={el.id} to={`/products/${el.id}`}>
              {el.title}
           
            </Link>
          );
        });
      };
  render() {
    return (
      <div className="productPage">
        <Header />
        <h1>Products Page</h1>
        <h3>{this.getAllProducts(products)}</h3>
      </div>
    );
  }
}
export default Product;

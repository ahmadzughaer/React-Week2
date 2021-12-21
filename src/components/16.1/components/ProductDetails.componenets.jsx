import React from "react";
import Header from "./Header.components";
import products from "../../../store";
import "./HomePage.style.css";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

  const { id } = useParams();
  const getAllProductsDetails = (products, id) => {
    return products.filter((el) => {
   if(id === el.id) {
       return <p>{el.title}</p>
   }
    else {
        return {}
    }
    });
  };

  return (
    <div className="productPage">
      <Header />
      <h1>Hello</h1>
      {JSON.stringify(getAllProductsDetails(products, id))}
    </div>
  );
};
export default ProductDetails;

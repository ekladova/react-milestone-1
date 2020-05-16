import React from "react";
import "./product.css";

let quantity = 0;
const Product = (props) => {
  return (
    <div className="product">
      <img className="image" alt="" src={props.image} />
      <p className="desc">{props.description}</p>
      <p className="desc">{props.price}</p>
      <span className="hide">{quantity}</span>
      {props.children}
    </div>
  );
};

export default Product;

import React from "react";
import "./cart.css";

const Cart = (props) => {
  return (
    <div id={props.id || "oldPlace"} className={props.classNameis || "cart"}>
      {props.children}
    </div>
  );
};

export default Cart;

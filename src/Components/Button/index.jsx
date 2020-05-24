import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="buttonContainer">
      <button className="buyButton" type={props.type} onClick={props.onClick}>
        Buy
      </button>
      {props.children}
    </div>
  );
};

export default Button;

import React from "react";

const Button = (props) => {
  return (
    <div>
      <button type={props.type} onClick={props.onClick}>
        Buy
      </button>

      <select>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5+</option>
      </select>
    </div>
  );
};

export default Button;

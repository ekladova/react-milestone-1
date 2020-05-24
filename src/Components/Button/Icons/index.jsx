import React from "react";
import "./icons.css";

const deleteElement = (event) => {
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
};

const Icon = () => {
  return (
    <span
      className="deleteIcon"
      role="img"
      aria-label="delete"
      onClick={deleteElement}
    >
      ❌
    </span>
  );
};

export default Icon;

import React from "react";
import "./icons.css";

const deleteElement = (event) => {
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
};

const Icon = ({ onClick }) => {
  return (
    <span className="deleteIcon" role="img" onClick={deleteElement}>
      ❌
    </span>
  );
};

export default Icon;

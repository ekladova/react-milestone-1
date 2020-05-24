import React from "react";

const TotalPrice = ({ sum = [0] }) => {
  const onChange = () => sum.reduce((a, b) => a + b, 0);

  return (
    <p onChange={onChange}>Total Price: {sum.reduce((a, b) => a + b, 0)}</p>
  );
};

export default TotalPrice;

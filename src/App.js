import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Display from "./Components/Cart";
import Product from "./Components/Products";
import Button from "./Components/Button";

import Product1 from "./assets/image.jpg";
import Product2 from "./assets/6.png";
import Product3 from "./assets/bla.jpg";
import Product4 from "./assets/img.jpg";

let displayNode = {};
const boughtItems = (event) => {
  if (event.target.parentNode.lastChild.value !== 0) {
    let newObject = {
      name:
        event.target.parentNode.previousSibling.previousSibling.previousSibling
          .innerHTML,
      price: event.target.parentNode.previousSibling.previousSibling.innerHTML,
      quantity: event.target.parentNode.lastChild.value,
      picture:
        event.target.parentNode.previousSibling.previousSibling.previousSibling
          .previousSibling.src,
    };
    console.log(newObject);
    displayNode = newObject;
    display(displayNode);
    return displayNode;
  }
};

function display(node) {
  ReactDOM.render(
    <Product
      image={node.picture}
      description={node.name}
      price={node.price}
    ></Product>,
    document.getElementById("display")
  );
}

function App() {
  return (
    <div className="App">
      <Display>
        <Product image={Product1} description="Product 1" price="5">
          <Button type="submit" onClick={boughtItems} />
        </Product>
        <Product image={Product2} description="Product 2" price="5">
          <Button type="submit" onClick={boughtItems} />
        </Product>
        <Product image={Product3} description="Product 3" price="5">
          <Button type="submit" onClick={boughtItems} />
        </Product>
        <Product image={Product4} description="Product 4" price="5">
          <Button type="submit" onClick={boughtItems} />
        </Product>
      </Display>

      <Display id="display" classNameis="bought"></Display>
    </div>
  );
}

export default App;

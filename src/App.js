import React from "react";
import "./App.css";
import Display from "./Components/Cart";
import Product from "./Components/Products";
import Button from "./Components/Button";

import Product1 from "./assets/image.jpg";
import Product2 from "./assets/6.png";
import Product3 from "./assets/bla.jpg";
import Product4 from "./assets/img.jpg";

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
    return (
      <Product
        image={newObject.picture}
        description={newObject.name}
        price={newObject.price}
      />
    );
  }
};

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

      <Display id="display" classNameis="bought">
        {boughtItems}
      </Display>
    </div>
  );
}

export default App;

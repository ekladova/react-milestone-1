import React from "react";

import "./App.css";
import Display from "./Components/Cart";
import Product from "./Components/Products";
import Button from "./Components/Button";

import Product1 from "./assets/image.jpg";
import Product2 from "./assets/6.png";
import Product3 from "./assets/bla.jpg";
import Product4 from "./assets/img.jpg";
import { useState } from "react";

function App(props) {
  let [shoppingCart, setShoppingCart] = useState([]);

  const boughtItems = (event) => {
    if (event.target.parentNode.lastChild.value > 0) {
      const newObject = {
        name:
          event.target.parentNode.previousSibling.previousSibling
            .previousSibling.innerHTML,
        price:
          event.target.parentNode.previousSibling.previousSibling.innerHTML,
        // quantity: event.target.parentNode.lastChild.value,
        picture:
          event.target.parentNode.previousSibling.previousSibling
            .previousSibling.previousSibling.src,
        id: Date.now(),
      };

      setShoppingCart(shoppingCart.concat(newObject));
      if (shoppingCart.length > 0) {
        setShoppingCart((shoppingCart = Array.from(new Set(shoppingCart))));
        console.log(shoppingCart);
      }

      event.target.parentNode.lastChild.value = 0;
    }
  };

  const updateDisplay = () => {
    let displayList = shoppingCart.map((item) => (
      <li key={item.id}>
        <Product
          image={item.picture}
          description={item.name}
          price={item.price}
        ></Product>
      </li>
    ));

    return <ul>{displayList}</ul>;
  };

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
        {updateDisplay()}
      </Display>
    </div>
  );
}

export default App;

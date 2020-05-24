import React from "react";

import "./App.css";
import Display from "./Components/Cart";
import Product from "./Components/Products";
import Button from "./Components/Button";
import Select from "./Components/Button/Select";
import Header from "./Components/header";
import Icon from "./Components/Button/Icons";

import Product1 from "./assets/image.jpg";
import Product2 from "./assets/6.png";
import Product3 from "./assets/bla.jpg";
import Product4 from "./assets/img.jpg";
import { useState } from "react";

function App(props) {
  let [shoppingCart, setShoppingCart] = useState([]);

  const boughtItems = (event) => {
    if (event.target.parentNode.lastChild.value > 0) {
      let newObject = {
        name: event.target.parentNode.previousSibling.previousSibling.innerHTML,
        price: event.target.parentNode.previousSibling.innerHTML,
        picture:
          event.target.parentNode.previousSibling.previousSibling
            .previousSibling.src,
        id: Date.now(),
        quantity: event.target.parentNode.lastChild.value,
      };
      event.target.parentNode.lastChild.value = 0;
      setShoppingCart(
        shoppingCart
          .filter((item) => item.name !== newObject.name)
          .concat(newObject)
      );
    }
  };

  const updateDisplay = () => {
    let displayList = shoppingCart.map((item) => (
      <li key={item.id}>
        <Product
          image={item.picture}
          description={item.name}
          price={item.price}
        >
          <Icon />
        </Product>
      </li>
    ));

    return <ul>{displayList}</ul>;
  };

  return (
    <div className="App">
      <Header></Header>
      <Display>
        <Product image={Product1} description="Product 1" price="5">
          <Button type="submit" onClick={boughtItems}>
            <Select></Select>
          </Button>
        </Product>
        <Product image={Product2} description="Product 2" price="15">
          <Button type="submit" onClick={boughtItems}>
            <Select></Select>
          </Button>
        </Product>
        <Product image={Product3} description="Product 3" price="10">
          <Button type="submit" onClick={boughtItems}>
            <Select></Select>
          </Button>
        </Product>
        <Product image={Product4} description="Product 4" price="25">
          <Button type="submit" onClick={boughtItems}>
            <Select></Select>
          </Button>
        </Product>
      </Display>
      <Display id="display" classNameis="bought">
        {updateDisplay()}
      </Display>
    </div>
  );
}

export default App;

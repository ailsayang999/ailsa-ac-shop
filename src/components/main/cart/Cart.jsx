import "./cart.scss";
import productsData from "./productsData.js";
import { ReactComponent as PlusIcon } from "assets/icons/plusIcon.svg";
import { ReactComponent as MinusIcon } from "assets/icons/minusIcon.svg";
import { useState } from "react";

//Item component
function Item({
  id,
  name,
  img,
  price,
  quantity,
  handlePlusClick,
  handleMinusClick,
}) {
  return (
    <div className="product-container">
      <img className="img-container" src={img} alt={name}></img>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <MinusIcon onClick={() => handleMinusClick(price, id, quantity)} />

            <span className="product-count">{quantity}</span>

            <PlusIcon onClick={() => handlePlusClick(price, id, quantity)} />
          </div>
        </div>
        <div className="price">{price * quantity}</div>
      </div>
    </div>
  );
}

//Cart component
export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItemsArray, setCartItemsArray] = useState(productsData);

  function totalPricePlus(price) {
    setTotalPrice(totalPrice + price);
  }
  function totalPriceMinus(price) {
    setTotalPrice(totalPrice - price);
  }

  //Plus button

  function handlePlusClick(price, id, quantity) {
    const NewCartItemsArray = cartItemsArray.map((i) => {
      if (i.id === id) {
        return {
          ...i,
          quantity: quantity + 1,
        };
      } else {
        return i;
      }
    });
    setCartItemsArray(NewCartItemsArray);
    totalPricePlus(price);
  }
  console.log(cartItemsArray);

  //Minus button
  function handleMinusClick(price, id, quantity) {
    if (quantity > 0) {
      const NewCartItemsArray = cartItemsArray.map((i) => {
        if (i.id === id) {
          return {
            ...i,
            quantity: quantity - 1,
          };
        } else {
          return i;
        }
      });

      setCartItemsArray(NewCartItemsArray);
      totalPriceMinus(price);
    }
  }

  return (
    <div className="cart-panel">
      <section className="cart-container">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list" data-total-price="0">
          {cartItemsArray.map((cartItem) => (
            <Item
              {...cartItem}
              key={cartItem.id}
              setCartItemsArray={setCartItemsArray}
              handlePlusClick={handlePlusClick}
              handleMinusClick={handleMinusClick}
            />
          ))}
        </section>

        <section className="cart-info shipping">
          <div className="text">運費</div>
          <div className="price">免費</div>
        </section>

        <section className="cart-info total">
          <div className="text">小計</div>
          <div className="price">{totalPrice}</div>
        </section>
      </section>
    </div>
  );
}

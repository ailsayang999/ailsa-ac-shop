import "./cart.scss";
import { ReactComponent as PlusIcon } from "assets/icons/plusIcon.svg";
import { ReactComponent as MinusIcon } from "assets/icons/minusIcon.svg";
import { useContext, useEffect } from "react";

import FormDataContext from "context/FormDataContext";
import CartContext from "context/CartContext";

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
            <MinusIcon onClick={() => handleMinusClick(id, quantity)} />

            <span className="product-count">{quantity}</span>

            <PlusIcon onClick={() => handlePlusClick(id, quantity)} />
          </div>
        </div>
        <div className="price">{price * quantity}</div>
      </div>
    </div>
  );
}

//Cart component
export default function Cart() {
  //取cartItems陣列資料
  const { cartItemsArray, setCartItemsArray } = useContext(CartContext);

  //取shipping fee的資料
  const { shippingFeeData } = useContext(FormDataContext);

  //totalPrice 更新
  const { totalPrice, setTotalPrice } = useContext(CartContext);

  useEffect(() => {
    //先算cartItemsArray裡面的總金，accumulator預設是0
    const itemTotalPrice = cartItemsArray.reduce((accumulator, obj) => {
      return accumulator + obj.price * obj.quantity;
    }, 0);
    setTotalPrice(shippingFeeData + itemTotalPrice);
  }, [cartItemsArray, shippingFeeData, setTotalPrice]);

  //Plus button
  function handlePlusClick(id, quantity) {
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
  }

  //Minus button
  function handleMinusClick(id, quantity) {
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
              handlePlusClick={handlePlusClick}
              handleMinusClick={handleMinusClick}
            />
          ))}
        </section>

        <section className="cart-info shipping">
          <div className="text">運費</div>
          <div className="price">
            {shippingFeeData === 0 ? "免費" : shippingFeeData}
          </div>
        </section>

        <section className="cart-info total">
          <div className="text">小計</div>
          <div className="price">{totalPrice}</div>
        </section>
      </section>
    </div>
  );
}

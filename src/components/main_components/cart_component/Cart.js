import "./_cart.scss";
import { ReactComponent as PlusIcon } from "assets/icons/plusIcon.svg";
import { ReactComponent as MinusIcon } from "assets/icons/minusIcon.svg";
import { useState } from "react";

const productsData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

//Item component
function Item({ name, img, price, totalPricePlus, totalPriceMinus }) {
  const [counter, setCounter] = useState(0);

  function handlePlusClick() {
    setCounter(counter + 1);
    totalPricePlus(price);
  }

  function handleMinusClick() {
    if (counter > 0) {
      setCounter(counter - 1);
      totalPriceMinus(price);
    }
  }

  return (
    <div className="product-container">
      <img className="img-container" src={img} alt={name}></img>
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <MinusIcon onClick={handleMinusClick} />

            <span className="product-count">{counter}</span>

            <PlusIcon onClick={handlePlusClick} />
          </div>
        </div>
        <div className="price">{price * counter}</div>
      </div>
    </div>
  );
}

//Cart component
export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);

  function totalPricePlus(price) {
    setTotalPrice(totalPrice + price);
  }
  function totalPriceMinus(price) {
    setTotalPrice(totalPrice - price);
  }

  return (
    <div className="cart-panel">
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        <section className="product-list col col-12" data-total-price="0">
          {productsData.map((productData) => (
            <Item
              {...productData}
              totalPricePlus={totalPricePlus}
              totalPriceMinus={totalPriceMinus}
              key={productData.id}
            />
          ))}
        </section>

        {/* <!--             cart-info shipping section --> */}
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price">免費</div>
        </section>
        {/* <!--             cart-info total section --> */}
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price">{totalPrice}</div>
        </section>
      </section>
    </div>
  );
}

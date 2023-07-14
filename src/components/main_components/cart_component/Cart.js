import "./_cart.scss";
import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";
import Product1 from "./product-1.jpg";
import Product2 from "./product-2.jpg";


export default function Cart() {
  return (
    <div className="cart-panel">
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>
        {/* <!--             product-list section --> */}
        <section className="product-list col col-12" data-total-price="0">
          {/* <!--               第一個商品 --> */}
          <div
            className="product-container col col-12"
            data-count="0"
            data-price="3999"
          >
            <img className="img-container" src={Product1} alt="product-1"></img>
            <div className="product-info">
              <div className="product-name">破壞補丁修身牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  {/* <svg className="minus"></svg> */}
                  <MinusIcon />
                  <span className="product-count">0</span>
                  {/* <svg className="plus"></svg> */}
                  <PlusIcon />
                </div>
              </div>
              <div className="price">$3999</div>
            </div>
          </div>

          {/* <!--               第二個商品 --> */}
          <div
            className="product-container col col-12"
            data-count="0"
            data-price="1299"
          >
            <img className="img-container" src={Product2} alt="product-2"></img>
            <div className="product-info">
              <div className="product-name">刷色直筒牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  {/* <svg className="minus"></svg> */}
                  <MinusIcon  />
                  <span className="product-count">0</span>
                  {/* <svg className="plus"></svg> */}
                  <PlusIcon  />
                </div>
              </div>
              <div className="price">$1299</div>
            </div>
          </div>
        </section>

        {/* <!--             cart-info shipping section --> */}
        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price">免費</div>
        </section>
        {/* <!--             cart-info total section --> */}
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price">0</div>
        </section>
      </section>
    </div>
  );
}

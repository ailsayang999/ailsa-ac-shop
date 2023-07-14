import "./_cart.scss";
import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";
import Product1 from "./product-1.jpg";
import Product2 from "./product-2.jpg";


export default function Cart() {
  return (
    <div class="cart-panel">
      <section class="cart-container col col-lg-5 col-sm-12">
        <h3 class="cart-title">購物籃</h3>
        {/* <!--             product-list section --> */}
        <section class="product-list col col-12" data-total-price="0">
          {/* <!--               第一個商品 --> */}
          <div
            class="product-container col col-12"
            data-count="0"
            data-price="3999"
          >
            <img class="img-container" src={Product1} alt="product-1"></img>
            <div class="product-info">
              <div class="product-name">破壞補丁修身牛仔褲</div>
              <div class="product-control-container">
                <div class="product-control">
                  {/* <svg class="minus"></svg> */}
                  <MinusIcon />
                  <span class="product-count">0</span>
                  {/* <svg class="plus"></svg> */}
                  <PlusIcon />
                </div>
              </div>
              <div class="price">$3999</div>
            </div>
          </div>

          {/* <!--               第二個商品 --> */}
          <div
            class="product-container col col-12"
            data-count="0"
            data-price="1299"
          >
            <img class="img-container" src={Product2} alt="product-2"></img>
            <div class="product-info">
              <div class="product-name">刷色直筒牛仔褲</div>
              <div class="product-control-container">
                <div class="product-control">
                  {/* <svg class="minus"></svg> */}
                  <MinusIcon  />
                  <span class="product-count">0</span>
                  {/* <svg class="plus"></svg> */}
                  <PlusIcon  />
                </div>
              </div>
              <div class="price">$1299</div>
            </div>
          </div>
        </section>

        {/* <!--             cart-info shipping section --> */}
        <section class="cart-info shipping col col-12">
          <div class="text">運費</div>
          <div class="price">免費</div>
        </section>
        {/* <!--             cart-info total section --> */}
        <section class="cart-info total col col-12">
          <div class="text">小計</div>
          <div class="price">0</div>
        </section>
      </section>
    </div>
  );
}

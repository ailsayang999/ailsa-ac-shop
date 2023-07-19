import "./formPanel.scss";
import countyData from "./countyData";
import React from "react";

function SelectOption() {
  return countyData.map((county) => (
    <option key={county.id} value={county.value}>
      {county.name}
    </option>
  ));
}

const FormPanel = () => {
  return (
    <div className="form-panel col col-12">
      <div className="form-container">
        {/* <!--                 address-part --> */}
        <form className="address-part form-part1" data-phase="address">
          <h3 className="form-title">寄送地址</h3>
          <section className="form-body col col-12">
            <div className="name">
              <div className="input-group name-group1 name-margin-space">
                <div className="input-label">稱謂</div>
                <div className="select-container">
                  <select className="name-select">
                    <option value="mr">先生</option>
                    <option value="ms">女士</option>
                    <option value="mx">不明</option>
                  </select>
                </div>
              </div>
              <div className="input-group name-group2">
                <div className="input-label name-label">姓名</div>
                <input
                  className="name-input"
                  type="text"
                  placeholder="請輸入姓名"
                ></input>
              </div>
            </div>
            <div className="phone-email">
              <div className="input-group phone-group phone-margin-space">
                <div className="input-label">電話</div>
                <input
                  className="phone-input"
                  type="tel"
                  placeholder="請輸入行動電話"
                ></input>
              </div>
              <div className="input-group email-group">
                <div className="input-label email-label">Email</div>
                <input
                  className="email-input"
                  type="email"
                  placeholder="請輸入電子郵件"
                ></input>
              </div>
            </div>
            <div className="address">
              <div className="input-group county-group  county-margin-space">
                <div className="input-label">縣市</div>
                <div className="select-container">
                  <select className="county-select" required>
                    <option value>請選擇縣市</option>
                    <SelectOption />
                  </select>
                </div>
              </div>
              <div className="input-group road-street-group ">
                <div className="input-label">地址</div>
                <input
                  className="road-street-input"
                  type="text"
                  placeholder="請輸入地址"
                ></input>
              </div>
            </div>
          </section>
        </form>

        {/* <!--                 shipping-part --> */}
        <form className="shipping-part form-part2 d-none" data-phase="shipping">
          <h3 className="form-title">運送方式</h3>
          <section className="form-body col col-12">
            <label className="radio-group col col-12" data-price="0">
              <input
                id="shipping-standard"
                className="shipping-standard"
                type="radio"
                name="shipping"
              ></input>
              <div className="radio-info">
                <div className="description-price">
                  <div className="text">標準運送</div>
                  <div className="price">免費</div>
                </div>
                <div className="period col col-12">約 3~7 個工作天</div>
              </div>
              <div className="radio-box-border"></div>
            </label>
            <label className="radio-group col col-12" data-price="500">
              <input
                id="shipping-dhl"
                type="radio"
                name="shipping"
                className="shipping-dhl"
              ></input>
              <div className="radio-info">
                <div className="description-price">
                  <div className="text">DHL 貨運</div>
                  <div className="price">$500</div>
                </div>
                <div className="period col col-12">48 小時內送達</div>
              </div>
              <div className="radio-box-border"></div>
            </label>
          </section>
        </form>

        {/* <!--                 credit-card-part --> */}
        <form
          className="credit-card-part form-part3 d-none"
          data-phase="credit-card"
        >
          <h3 className="form-title">付款資訊</h3>
          <section className="form-body col col-12">
            <div className="col col-12">
              <div className="input-group">
                <div className="input-label">持卡人姓名</div>
                <input
                  className="card-name-input"
                  type="text"
                  placeholder="John Doe"
                ></input>
              </div>
            </div>
            <div className="col col-12">
              <div className="input-group">
                <div className="input-label">卡號</div>
                <input
                  className="card-number-input"
                  type="text"
                  placeholder="1111 2222 3333 4444"
                ></input>
              </div>
            </div>
            <div className="card-detail">
              <div className="input-group card-number-group card-detail-margin-space">
                <div className="input-label">有效期限</div>
                <input
                  className="card-number-input"
                  type="text"
                  placeholder="MM/YY"
                ></input>
              </div>
              <div className="input-group CVC-CCV-group">
                <div className="input-label CVC-CCV-label">CVC / CCV</div>
                <input
                  className="CVC-CCV-input"
                  type="text"
                  placeholder="123"
                ></input>
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default FormPanel;

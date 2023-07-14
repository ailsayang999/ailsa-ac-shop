import "./_formPanel.scss";

import React from 'react'

const FormPanel = () => {
  return (
    <div class="form-panel col col-12">
      <div class="form-container">
        {/* <!--                 address-part --> */}
        <form class="address-part form-part1" data-phase="address">
          <h3 class="form-title">寄送地址</h3>
          <section class="form-body col col-12">
            <div class="name">
              <div class="input-group name-group1 name-margin-space">
                <div class="input-label">稱謂</div>
                <div class="select-container">
                  <select class="name-select">
                    <option value="mr">先生</option>
                    <option value="ms">女士</option>
                    <option value="mx">不明</option>
                  </select>
                </div>
              </div>
              <div class="input-group name-group2">
                <div class="input-label name-label">姓名</div>
                <input
                  class="name-input"
                  type="text"
                  placeholder="請輸入姓名"
                ></input>
              </div>
            </div>
            <div class="phone-email">
              <div class="input-group phone-group phone-margin-space">
                <div class="input-label">電話</div>
                <input
                  class="phone-input"
                  type="tel"
                  placeholder="請輸入行動電話"
                ></input>
              </div>
              <div class="input-group email-group">
                <div class="input-label email-label">Email</div>
                <input
                  class="email-input"
                  type="email"
                  placeholder="請輸入電子郵件"
                ></input>
              </div>
            </div>
            <div class="address">
              <div class="input-group county-group  county-margin-space">
                <div class="input-label">縣市</div>
                <div class="select-container">
                  <select class="county-select" required>
                    <option value>請選擇縣市</option>
                    <option value="KLU">基隆市</option>
                    <option value="TPH">新北市</option>
                    <option value="TPE">臺北市</option>
                    <option value="TYC">桃園市</option>
                    <option value="HSH">新竹縣</option>
                    <option value="HSC">新竹市</option>
                    <option value="MAC">苗栗市</option>
                    <option value="MAL">苗栗縣</option>
                    <option value="TXG">臺中市</option>
                    <option value="CWH">彰化縣</option>
                    <option value="CWS">彰化市</option>
                    <option value="NTC">南投市</option>
                    <option value="NTO">南投縣</option>
                    <option value="YLH">雲林縣</option>
                    <option value="CHY">嘉義縣</option>
                    <option value="CYI">嘉義市</option>
                    <option value="TNN">臺南市</option>
                    <option value="KHH">高雄市</option>
                    <option value="IUH">屏東縣</option>
                    <option value="PTS">屏東市</option>
                    <option value="ILN">宜蘭縣</option>
                    <option value="ILC">宜蘭市</option>
                    <option value="HWA">花蓮縣</option>
                    <option value="HWC">花蓮市</option>
                    <option value="TTC">臺東市</option>
                    <option value="TTT">臺東縣</option>
                    <option value="PEH">澎湖縣</option>
                    <option value="KMN">金門縣</option>
                    <option value="LNN">連江縣</option>
                  </select>
                </div>
              </div>
              <div class="input-group road-street-group ">
                <div class="input-label">地址</div>
                <input
                  class="road-street-input"
                  type="text"
                  placeholder="請輸入地址"
                ></input>
              </div>
            </div>
          </section>
        </form>

        {/* <!--                 shipping-part --> */}
        <form class="shipping-part form-part2 d-none" data-phase="shipping">
          <h3 class="form-title">運送方式</h3>
          <section class="form-body col col-12">
            <label class="radio-group col col-12" data-price="0">
              <input
                id="shipping-standard"
                class="shipping-standard"
                type="radio"
                name="shipping"
                checked
              ></input>
              <div class="radio-info">
                <div class="description-price">
                  <div class="text">標準運送</div>
                  <div class="price">免費</div>
                </div>
                <div class="period col col-12">約 3~7 個工作天</div>
              </div>
              <div class="radio-box-border"></div>
            </label>
            <label class="radio-group col col-12" data-price="500">
              <input
                id="shipping-dhl"
                type="radio"
                name="shipping"
                class="shipping-dhl"
              ></input>
              <div class="radio-info">
                <div class="description-price">
                  <div class="text">DHL 貨運</div>
                  <div class="price">$500</div>
                </div>
                <div class="period col col-12">48 小時內送達</div>
              </div>
              <div class="radio-box-border"></div>
            </label>
          </section>
        </form>

        {/* <!--                 credit-card-part --> */}
        <form
          class="credit-card-part form-part3 d-none"
          data-phase="credit-card"
        >
          <h3 class="form-title">付款資訊</h3>
          <section class="form-body col col-12">
            <div class="col col-12">
              <div class="input-group">
                <div class="input-label">持卡人姓名</div>
                <input
                  class="card-name-input"
                  type="text"
                  placeholder="John Doe"
                ></input>
              </div>
            </div>
            <div class="col col-12">
              <div class="input-group">
                <div class="input-label">卡號</div>
                <input
                  class="card-number-input"
                  type="text"
                  placeholder="1111 2222 3333 4444"
                ></input>
              </div>
            </div>
            <div class="card-detail">
              <div class="input-group card-number-group card-detail-margin-space">
                <div class="input-label">有效期限</div>
                <input
                  class="card-number-input"
                  type="text"
                  placeholder="MM/YY"
                ></input>
              </div>
              <div class="input-group CVC-CCV-group">
                <div class="input-label CVC-CCV-label">CVC / CCV</div>
                <input
                  class="CVC-CCV-input"
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
}

export default FormPanel
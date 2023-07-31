import React, { useContext } from "react";
import FormDataContext from "context/FormDataContext";

export default function FormStep3() {
  //Context
  const { formData, setFormData } = useContext(FormDataContext);
  return (
    <form className="credit-card-part form-part3" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="input-group">
            <div className="input-label">持卡人姓名</div>
            <input
              className="card-name-input"
              type="text"
              placeholder="John Doe"
              value={formData.cardUserName}
              onChange={(event) => {
                setFormData({ ...formData, cardUserName: event.target.value });
              }}
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
              value={formData.cardNumber}
              onChange={(event) => {
                setFormData({ ...formData, cardNumber: event.target.value });
              }}
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
              value={formData.cardExpirationDate}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  cardExpirationDate: event.target.value,
                });
              }}
            ></input>
          </div>
          <div className="input-group CVC-CCV-group">
            <div className="input-label CVC-CCV-label">CVC / CCV</div>
            <input
              className="CVC-CCV-input"
              type="text"
              placeholder="123"
              value={formData.CardCVCCCV}
              onChange={(event) => {
                setFormData({ ...formData, CardCVCCCV: event.target.value });
              }}
            ></input>
          </div>
        </div>
      </section>
    </form>
  );
}

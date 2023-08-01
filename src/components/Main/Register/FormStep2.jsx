import React, { useContext } from "react";

import FormDataContext from "context/FormDataContext";

//Radio
function Radio({
  shippingFee,
  id,
  className,
  value,
  defaultChecked,
  description,
  duration,
  handleShippingMethodChange,
  setFormData,
  formData,
}) {
  return (
    <label className="radio-group col col-12" data-price="0">
      <input
        id={id}
        className={className}
        type="radio"
        name="shipping"
        value={value}
        defaultChecked={defaultChecked}
        onChange={(event) => {
          setFormData({ ...formData, shippingMethod: event.target.value });
          handleShippingMethodChange(shippingFee);
        }}

      ></input>

      <div className="radio-info">
        <div className="description-price">
          <div className="text">{description}</div>
          <div className="price">
            {shippingFee === 0 ? "免運" : shippingFee}
          </div>
        </div>
        <div className="period col col-12">{duration}</div>
      </div>
      <div className="radio-box-border"></div>
    </label>
  );
}

//FormStep2
const FormStep2 = () => {
  const { formData, setFormData, shippingFeeData, handleShippingMethodChange } =
    useContext(FormDataContext);

  return (
    <form className="shipping-part form-part2" data-phase="shipping">
      <h3 className="form-title">運送方式</h3>

      <section className="form-body col col-12">
        <Radio
          shippingFee={0}
          className={"shipping-standard"}
          id={"shipping-dhl"}
          value="standard"
          defaultChecked={shippingFeeData === 0}
          description={"標準運送"}
          duration={"約 3~7 個工作天"}
          handleShippingMethodChange={handleShippingMethodChange}
          setFormData={setFormData}
          formData={formData}
        />

        <Radio
          shippingFee={500}
          className={"shipping-dhl"}
          id={"shipping-standard"}
          value="shipping-dhl"
          defaultChecked={shippingFeeData === 500}
          description={"DHL 貨運"}
          duration={"48 小時內送達"}
          handleShippingMethodChange={handleShippingMethodChange}
          setFormData={setFormData}
          formData={formData}
        />
      </section>
    </form>
  );
};

export default FormStep2;

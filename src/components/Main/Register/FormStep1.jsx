import React from "react";
import countyData from "./countyData.js";

function SelectOption() {
  return countyData.map((county) => (
    <option key={county.id} value={county.value}>
      {county.name}
    </option>
  ));
}



export default function FormStep1({ formData, setFormData }) {
  return (
    <form className="address-part form-part1" data-phase="address">
      <h3 className="form-title">寄送地址</h3>
      <section className="form-body col col-12">
        <div className="name">
          <div className="input-group name-group1 name-margin-space">
            <div className="input-label">稱謂</div>
            <div className="select-container">
              <select
                className="name-select"
                value={formData.title}
                onChange={(event) =>
                  setFormData({ ...formData, title: event.target.value })
                }
              >
                <option>請選擇稱謂</option>
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
              value={formData.name}
              onChange={(event) => {
                setFormData({ ...formData, name: event.target.value });
              }}
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
              value={formData.phone}
              onChange={(event) => {
                setFormData({ ...formData, phone: event.target.value });
              }}
            ></input>
          </div>
          <div className="input-group email-group">
            <div className="input-label email-label">Email</div>
            <input
              className="email-input"
              type="email"
              placeholder="請輸入電子郵件"
              value={formData.email}
              onChange={(event) => {
                setFormData({ ...formData, email: event.target.value });
              }}
            ></input>
          </div>
        </div>
        <div className="address">
          <div className="input-group county-group  county-margin-space">
            <div className="input-label">縣市</div>
            <div className="select-container">
              <select
                className="county-select"
                required
                value={formData.county}
                onChange={(event) => {
                  setFormData({ ...formData, county: event.target.value });
                }}
              >
                <option>請選擇縣市</option>
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
              value={formData.address}
              onChange={(event) => {
                setFormData({ ...formData, address: event.target.value });
              }}
            ></input>
          </div>
        </div>
      </section>
    </form>
  );
}

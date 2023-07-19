import "./stepperPanel.scss";

import React from 'react'

const StepperPanel = () => {
  return (
    <div id="step-control" className="stepper-panel">
      <div className="stepper-container container">
        <div className="step active">
          <div className="circle-container circleNum1"></div>
          <div className="label-container label1">寄送地址</div>
        </div>

        <div className="line active"></div>

        <div className="step">
          <div className="circle-container circleNum2"></div>
          <div className="label-container">運送方式</div>
        </div>

        <div className="line"></div>

        <div className="step">
          <div className="circle-container circleNum3"></div>
          <div className="label-container">付款資訊</div>
        </div>
      </div>
    </div>
  );
}

export default StepperPanel
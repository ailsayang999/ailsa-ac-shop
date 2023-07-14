import "./_stepperPanel.scss";

import React from 'react'

const StepperPanel = () => {
  return (
    <div id="step-control" class="stepper-panel">
      <div class="stepper-container container">
        <div class="step active">
          <div class="circle-container circleNum1"></div>
          <div class="label-container label1">寄送地址</div>
        </div>

        <div class="line active"></div>

        <div class="step">
          <div class="circle-container circleNum2"></div>
          <div class="label-container">運送方式</div>
        </div>

        <div class="line"></div>

        <div class="step">
          <div class="circle-container circleNum3"></div>
          <div class="label-container">付款資訊</div>
        </div>
      </div>
    </div>
  );
}

export default StepperPanel
import "./stepperPanel.scss";
import { useEffect, useState } from "react";

function Circle({ className, children }) {
  return <div className={className}>{children}</div>;
}

const StepperPanel = ({ active, stepperCircleNum }) => {
  //stepperCircleNum 的初始值是 3
  const arr = [];
  const labelName = ["寄送地址", "運送方式", "付款資訊"];
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth((100 / (stepperCircleNum - 1)) * active);
  }, [stepperCircleNum, active]);

  for (let i = 0; i < stepperCircleNum; i++) {
    arr.push(
      <Circle className="circle" key={i}>
        <div
          className={
            i <= active
              ? "circle-number-container active"
              : "circle-number-container"
          }
        >
          {i + 1}
        </div>
        <span
          className={i <= active ? "label-content active" : "label-content"}
        >
          {labelName[i]}
        </span>
      </Circle>
    );
  }

  return (
    <div id="step-control" className="stepper-panel">
      <div className="stepper-container container">
        <div className="progress" style={{ width: width + "%" }}></div>
        {arr}
      </div>
    </div>
  );
};

export default StepperPanel;

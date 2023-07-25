import "./stepperPanel.scss";
import { useEffect, useState } from "react";



const StepperPanel = ({ active, stepperCircleNum }) => {
  //stepperCircleNum 的初始值是 3
  const labelName = ["寄送地址", "運送方式", "付款資訊"];
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth((100 / (stepperCircleNum - 1)) * active);
  }, [stepperCircleNum, active]);

 

  return (
    <div id="step-control" className="stepper-panel">
      <div className="stepper-container container">
        <div className="progress" style={{ width: width + "%" }}></div>
        {labelName.map((name, i) => {
          return (
            <div className="circle" key={name}>
              <div
                className={`circle-number-container ${i <= active && "active"}`}
              >
                {i + 1}
              </div>
              <span className={`label-content ${i <= active && "active"}`}>
                {name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepperPanel;

import Register from "./register/Register.jsx";
import Cart from "./cart/Cart.jsx";
import ProgressControl from "./register/ProgressControl.jsx";

import { useState } from "react";

export default function Main() {
  //調控每個step要做什麼事，影響ProgressControl的button，FromPanel的換頁
  const [step, setStep] = useState(0);

  //調控StepperPanel進度條，影響：StepperPanel，ProgressControl的button
  const [active, setActive] = useState(0);
  //stepper裡面的number
  const [stepperCircleNum] = useState(3);

  // To keep track of user's input information, you can use state in the parent component，FormStep2 要等到之後要計算金額的時候再用useContext來一次處理，totalPrice
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    phone: "",
    email: "",
    county: "",
    address: "",
    cardUserName: "",
    cardNumber: "",
    cardExpirationDate: "",
    CardCVCCCV: "",
  });
  return (
    <main className="site-main">
      <div className="main-container">
        <div className="left-panel">
          <Register
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            active={active}
            setActive={setActive}
            stepperCircleNum={stepperCircleNum}
          />
          <ProgressControl
            step={step}
            setStep={setStep}
            formData={formData}
            setFormData={setFormData}
            active={active}
            setActive={setActive}
            stepperCircleNum={stepperCircleNum}
          />
        </div>
        <div className="right-panel">
          <Cart />
        </div>
      </div>
    </main>
  );
}

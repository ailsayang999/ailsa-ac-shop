import { createContext, useState } from "react";

const FormDataContext = createContext();

//Provider component
function FormDataProvider({ children }) {
  //調控每個step要做什麼事，影響ProgressControl的button，FromPanel的換頁
  const [step, setStep] = useState(0);

  //調控StepperPanel進度條，影響：StepperPanel，ProgressControl的button
  const [active, setActive] = useState(1);
  const [checked, setChecked] = useState(0);
  //stepper裡面的number
  const stepperCircleNum = 5;

  // To keep track of user's input information, you can use state in the parent component
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    phone: "",
    email: "",
    county: "",
    address: "",
    shippingMethod: "",
    cardUserName: "",
    cardNumber: "",
    cardExpirationDate: "",
    CardCVCCCV: "",
  });

  //shipping fee
  const [shippingFeeData, setShippingFeeData] = useState(0);
  function handleShippingMethodChange(shippingFee) {
    setShippingFeeData(shippingFee);
  }

  const FormValueToShare = {
    step,
    setStep,
    active,
    setActive,
    checked,
    setChecked,
    stepperCircleNum,
    formData,
    setFormData,
    shippingFeeData,
    handleShippingMethodChange,
  };

  return (
    <FormDataContext.Provider value={FormValueToShare}>
      {children}
    </FormDataContext.Provider>
  );
}

export { FormDataProvider };
export default FormDataContext;

import "./formPanel.scss";

import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";

export default function FormPanel({ step, formData, setFormData }) {
  const stepDisplay = () => {
    if (step === 0) {
      return <FormStep1 formData={formData} setFormData={setFormData} />;
    } else if (step === 1) {
      //之後在totalPrice的部分要調整
      return <FormStep2 />;
    } else if (step === 2) {
      return <FormStep3 formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form-panel col col-12">
      <div className="form-container">{stepDisplay()}</div>
    </div>
  );
}

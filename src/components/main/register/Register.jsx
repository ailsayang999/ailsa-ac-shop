import StepperPanel from "./StepperPanel";
import FormPanel from "./FormPanel";


export default function Register({
  step,
  active,
  checked,
  stepperCircleNum,
  formData,
  setFormData,
}) {
  return (
    <div className="register-panel">
      <section className="register-container">
        <h2 className="register-title">結帳</h2>
        <StepperPanel
          active={active}
          stepperCircleNum={stepperCircleNum}
          checked={checked}
        />
        <FormPanel step={step} formData={formData} setFormData={setFormData} />
      </section>
    </div>
  );
}


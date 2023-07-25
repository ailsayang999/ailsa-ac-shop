import StepperPanel from "./StepperPanel";
import FormPanel from "./FormPanel";


export default function Register({
  step,
  setStep,
  active,
  setActive,
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
        />
        <FormPanel
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      </section>
    </div>
  );
}


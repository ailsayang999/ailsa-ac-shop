import StepperPanel from "./StepperPanel";
import FormPanel from "./FormPanel";


export default function Register() {
  return (
    <div className="register-panel">
      <section className="register-container">
        <h2 className="register-title">結帳</h2>
        <StepperPanel/>
        <FormPanel/>
      </section>
    </div>
  );
}


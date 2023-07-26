import "./progressControl.scss";
import { ReactComponent as RightArrow } from "assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "assets/icons/left-arrow.svg";

//下一步
function RightArrowBtn({
  setStep,
  active,
  setActive,
  stepperCircleNum,
  checked,
  setChecked,
}) {
  return (
    <button
      className="next next1"
      onClick={() => {
        setStep((currentStep) => currentStep + 1);
        active >= stepperCircleNum - 1
          ? setActive(stepperCircleNum - 1)
          : setActive(active + 1);
        checked >= stepperCircleNum - 1
          ? setChecked(stepperCircleNum - 1)
          : setChecked(checked + 1);
      }}
    >
      下一步
      <RightArrow />
    </button>
  );
}

//上一步
function LeftArrowBtn({ setStep, active, setActive, checked, setChecked }) {
  return (
    <button
      className="prev prev1"
      onClick={() => {
        setStep((currentStep) => currentStep - 1);
        active < 0 ? setActive(0) : setActive(active - 1);
        checked < 0 ? setChecked(0) : setChecked(checked - 1);
      }}
    >
      <LeftArrow />
      上一步
    </button>
  );
}

export default function ProgressControl({
  step,
  setStep,
  formData,
  active,
  setActive,
  stepperCircleNum,
  checked,
  setChecked,
}) {
  const buttonDisplay = () => {
    if (step === 0) {
      return (
        <section className="button-group button-group1" data-phase="address">
          <RightArrowBtn
            setStep={setStep}
            active={active}
            setActive={setActive}
            stepperCircleNum={stepperCircleNum}
            checked={checked}
            setChecked={setChecked}
          />
        </section>
      );
    } else if (step === 1) {
      return (
        <section className="button-group button-group2 " data-phase="shipping">
          <LeftArrowBtn
            setStep={setStep}
            active={active}
            setActive={setActive}
            stepperCircleNum={stepperCircleNum}
            checked={checked}
            setChecked={setChecked}
          />

          <RightArrowBtn
            setStep={setStep}
            active={active}
            setActive={setActive}
            stepperCircleNum={stepperCircleNum}
            checked={checked}
            setChecked={setChecked}
          />
        </section>
      );
    } else if (step === 2) {
      return (
        <section
          className="button-group button-group3 col col-12 "
          data-phase="credit-card"
        >
          <LeftArrowBtn
            setStep={setStep}
            active={active}
            setActive={setActive}
            stepperCircleNum={stepperCircleNum}
            checked={checked}
            setChecked={setChecked}
          />

          <button
            className="next"
            onClick={() => {
              alert(
                "FORM SUBMITTED!! \nCheck out console to see formData object~"
              );
              // 通常會把這筆資料給sending to an API
              console.log(formData);
            }}
          >
            確認下單
          </button>
        </section>
      );
    }
  };

  return (
    <div className="progress-control-panel">
      <section className="progress-control-container">
        {buttonDisplay()}
      </section>
    </div>
  );
}

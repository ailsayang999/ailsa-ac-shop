import "./progressControl.scss"
import { ReactComponent as RightArrow } from "assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "assets/icons/left-arrow.svg";



export default function ProgressControl() {
  return (
    <div className="progress-control-panel">
    
       <section className="progress-control-container">

            <section className="button-group button-group1" data-phase="address">
              <button className="next next1">
                下一步
                <RightArrow/>
              </button>
            </section>

            <section className="button-group button-group2 d-none" data-phase="shipping">
              <button className="prev prev1">
                {/* <svg className="left-arrow"></svg> */}
                <LeftArrow/>
                上一步
              </button>
              <button className="next">
                下一步
                {/* <svg className="right-arrow"></svg> */}
                <RightArrow/>
              </button>
            </section>
            
            <section className="button-group button-group3 col col-12 d-none" data-phase="credit-card">
              <button className="prev">
                <LeftArrow/>
                上一步
              </button>
              <button className="next">確認下單</button>
            </section>

          </section>
    </div>
  );
}

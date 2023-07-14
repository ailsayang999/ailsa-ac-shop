import "./_progressControl.scss"
import RightArrow from "./RightArrow"
import LeftArrow from "./LeftArrow"



export default function ProgressControl() {
  return (
    <div className="progress-control-panel">
    
       <section class="progress-control-container">
            {/* <!--             button-group1 --> */}
            <section class="button-group button-group1" data-phase="address">
              <button class="next next1">
                下一步
                {/* <svg class="right-arrow"></svg> */}
                <RightArrow/>
              </button>
            </section>
            {/* <!--             button-group2 --> */}
            <section class="button-group button-group2 d-none" data-phase="shipping">
              {/* <!--               上一步 --> */}
              <button class="prev prev1">
                {/* <svg class="left-arrow"></svg> */}
                <LeftArrow/>
                上一步
              </button>
              {/* <!--               下一步 --> */}
              <button class="next">
                下一步
                {/* <svg class="right-arrow"></svg> */}
                <RightArrow/>
              </button>
            </section>
            {/* <!--             button-group3 --> */}
            <section class="button-group button-group3 col col-12 d-none" data-phase="credit-card">
              <button class="prev">
                {/* <svg class="left-arrow"></svg> */}
                <LeftArrow/>
                上一步
              </button>
              <button class="next">確認下單</button>
            </section>

          </section>
    </div>
  );
}

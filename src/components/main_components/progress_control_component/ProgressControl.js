import "./_progressControl.scss"
import { ReactComponent as RightArrow } from "assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "assets/icons/left-arrow.svg";



export default function ProgressControl() {
  return (
    <div className="progress-control-panel">
    
       <section className="progress-control-container">
            {/* <!--             button-group1 --> */}
            <section className="button-group button-group1" data-phase="address">
              <button className="next next1">
                下一步
                {/* <svg className="right-arrow"></svg> */}
                <RightArrow/>
              </button>
            </section>
            {/* <!--             button-group2 --> */}
            <section className="button-group button-group2 d-none" data-phase="shipping">
              {/* <!--               上一步 --> */}
              <button className="prev prev1">
                {/* <svg className="left-arrow"></svg> */}
                <LeftArrow/>
                上一步
              </button>
              {/* <!--               下一步 --> */}
              <button className="next">
                下一步
                {/* <svg className="right-arrow"></svg> */}
                <RightArrow/>
              </button>
            </section>
            {/* <!--             button-group3 --> */}
            <section className="button-group button-group3 col col-12 d-none" data-phase="credit-card">
              <button className="prev">
                {/* <svg className="left-arrow"></svg> */}
                <LeftArrow/>
                上一步
              </button>
              <button className="next">確認下單</button>
            </section>

          </section>
    </div>
  );
}

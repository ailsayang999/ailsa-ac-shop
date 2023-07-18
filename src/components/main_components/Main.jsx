import Register from "./register_component/Register.js";
import Cart from "./cart_component/Cart.js";
import ProgressControl from "./progress_control_component/ProgressControl.js";

export default function Main() {
  return (
    <main className="site-main">
      <div className="main-container">
        <div className="left-panel">
          <Register />
          <ProgressControl />
        </div>
        <div className="right-panel">
          <Cart />
        </div>
      </div>
    </main>
  );
}

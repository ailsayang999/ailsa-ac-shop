import Register from "./register_component/Register.jsx";
import Cart from "./cart_component/Cart.jsx";
import ProgressControl from "./progress_control_component/ProgressControl.jsx";

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

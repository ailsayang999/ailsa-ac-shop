import Register from "./register/Register.jsx";
import Cart from "./cart/Cart.jsx";
import ProgressControl from "./progress-control/ProgressControl.jsx";

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

import Register from "./Register/Register.jsx";
import Cart from "./Cart/Cart.jsx";
import ProgressControl from "./Register/ProgressControl.jsx";

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

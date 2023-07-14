import "./_header.scss";
import IconToggle from "./IconToggle";
import Search from "./Search";
import Moon from "./Moon";
import Sun from "./Sun";
import CartIcon from "./CartIcon";
import Logo from "../footer_components/Logo.js"



export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container mx-auto">
        {/* <!-- navbar-toggle --> */}
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlFor="navbar-toggle" className="burger-container">
          {/* <svg className="icon-toggle cursor-point">
            <use xlink:href="#svg-icon-toggle"></use>
          </svg> */}
          <IconToggle />
        </label>

        {/* <!-- navbar-menu --> */}
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                男款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                女款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                客製商品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                聯絡我們
              </a>
            </li>
          </ul>

          <ul className="nav-list site-action-list">
            <li className="nav-item">
              {/* <svg className="nav-icon cursor-point">
                <use xlink:href="#svg-icon-search"></use>
              </svg>                               */}
              <Search />
            </li>

            <li className="nav-item">
              {/* <svg className="nav-icon cursor-point">
                <use xlink:href="#svg-icon-cart"></use>
              </svg> */}
              <CartIcon />
            </li>

            <li id="theme-toggle" className="nav-item">
              {/* <svg className="nav-icon cursor-point">
                <use xlink:href="#svg-icon-moon"></use>
              </svg>                */}
              <Moon stroke="#080808" />
              {/* <svg className="nav-icon cursor-point">
                <use xlink:href="#svg-icon-sun"></use>
              </svg> */}
              <Sun className="sun-icon" />
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <a className="header-logo-container" href="#">
          {/* <svg className="icon-logo cursor-point">
            <use xlink:href="#svg-icon-logo"></use>
          </svg> */}
          <Logo />
        </a>
      </div>
    </header>
  );
}

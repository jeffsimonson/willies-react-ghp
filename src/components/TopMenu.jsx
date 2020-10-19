import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/images/icons/WilliesNewLogo.png";
// import logo2 from "../assets/images/icons/WilliesLogoGrey.png";
import logo2 from "../assets/images/icons/WilliesNewLogo.png";
const TopMenu = () => {
  return (
    <BrowserRouter
      basename="/willies-reimagined-react"
      forceRefresh={true}
      onUpdate={() => window.scrollTo(0, 0)}
    >
      <header>
        <div className="wrap-menu-header gradient1 trans-0-4">
          <div className="container h-full">
            <div className="wrap_header trans-0-3">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="IMG-LOGO" data-logofixed={logo2}></img>
                </Link>
              </div>

              <div className="wrap_menu p-l-45 p-l-0-xl">
                <nav className="menu">
                  <ul className="main_menu">
                    <li>
                      <Link to="/">Home </Link>
                    </li>

                    <li>
                      <Link to="/wines">Wines </Link>
                    </li>

                    <li>
                      <Link to="/food">Food </Link>
                    </li>

                    <li>
                      <Link to="/gallery">Gallery </Link>
                    </li>

                    <li>
                      <Link to="/about">About</Link>
                    </li>

                    <li>
                      <Link to="/events">Events </Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <button className="btn-show-sidebar m-l-33 trans-0-4"></button>
            </div>
          </div>
        </div>
      </header>
    </BrowserRouter>
  );
};

export default TopMenu;

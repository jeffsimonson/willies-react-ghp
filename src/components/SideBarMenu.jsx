import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const SideBarMenu = () => {
  return (
    <BrowserRouter
      basename="/willies-reimagined-react"
      forceRefresh={true}
      onUpdate={() => window.scrollTo(0, 0)}
    >
      <ul className="menu-sidebar p-t-95 p-b-70">
        <li className="t-center m-b-13">
          <Link to="/" className="txt19">
            Home
          </Link>
        </li>

        <li className="t-center m-b-13">
          <Link to="/wines" className="txt19">
            Wines
          </Link>
        </li>

        <li className="t-center m-b-13">
          <Link to="/food" className="txt19">
            Food
          </Link>
        </li>

        <li className="t-center m-b-13">
          <Link to="/gallery" className="txt19">
            Gallery
          </Link>
        </li>

        <li className="t-center m-b-13">
          <Link to="/about" className="txt19">
            About
          </Link>
        </li>

        <li className="t-center m-b-13">
          <Link to="/events" className="txt19">
            Events
          </Link>
        </li>

        <li className="t-center m-b-33">
          <Link to="/contact" className="txt19">
            Contact
          </Link>
        </li>
      </ul>
    </BrowserRouter>
  );
};

export default SideBarMenu;

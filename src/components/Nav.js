import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import photo from "../images/wood-logo-dark.jpg";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink classname="navbar-brand" to="/">
            <img src={photo} alt="logo"/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/straps">
                  Straps
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/powerBanks">
                  Power Banks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cables">
                  Cables
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/magSafe">
                  MagSafe
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/charger">
                  Charger
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/more">
                  More
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;

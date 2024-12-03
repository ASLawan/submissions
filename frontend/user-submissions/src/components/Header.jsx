/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
// import "../App.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-4" id="header">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <h1 id="brand-title">Submissions App</h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/"
                id="link-text"
              >
                Submit Details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/submissions"
                id="link-text"
              >
                Submissions
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-light sticky-top"
      style={{ background: "#fff", borderBottom: "1px solid #ccc", height: "4rem" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand ms-5" to="/">
          <img
            src="media/logo.svg"
            alt="Logo"
            style={{ width: "20%", marginLeft: "5rem" }}
          />
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <form className="d-flex" style={{ marginLeft: "8rem" }}>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

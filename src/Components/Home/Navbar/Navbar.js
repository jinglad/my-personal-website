import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark mt-3"
      style={{ fontFamily: "'Noto Sans', sans-serif" }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mx-auto text-uppercase">
          <Link
            className="nav-item nav-link px-4 letter-spacing text-white active"
            to="/"
          >
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link
            className="nav-item nav-link px-4 letter-spacing text-white"
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="nav-item nav-link px-4 letter-spacing text-white"
            to="/resume"
          >
            Resume
          </Link>
          <Link
            className="nav-item nav-link px-4 letter-spacing text-white"
            to="/blog"
          >
            blog
          </Link>
          <Link
            className="nav-item nav-link px-4 letter-spacing text-white"
            to="/contact-me"
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

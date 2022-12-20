import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto active">
              <li className="nav-item">
                <Link className="nav-link " to="/notes">
                  Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <button
                className="btn btn-outline-danger rounded fs-5 my-2 my-sm-0"
                type="button"
                onClick={() => navigate("/SignUp")}
              >
                Sign Up
              </button>
              <button
                className="btn btn-outline-warning rounded fs-5 my-2 mx-2 my-sm-0"
                type="button"
                onClick={() => navigate("/SignIn")}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

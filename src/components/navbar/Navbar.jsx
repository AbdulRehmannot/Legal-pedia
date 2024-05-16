import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
// import logo from "../../assets/imgs/logo.png";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [hideAuthBtns, setHideAuthBtns] = useState(false);

  const toggleSidebar = () => {
    setToggleNavbar(!toggleNavbar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 578) {
        setHideAuthBtns(true);
      } else {
        setHideAuthBtns(false);
      }
    };

    // Call handleResize initially and add event listener for resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="wow fadeInDown pe-sm-3 ps-sm-5 px-lg-5 pt-3 navbar navbar-expand-lg navbar_main ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* <img src={logo} className="logo" alt="logo" /> */}
          <h2>LOGO</h2>
        </Link>

        <div
          className={`navbarCollapse  ${
            toggleNavbar ? "show" : "" // Add "show" class when toggleNavbar is true
          }`}
          id="navbarSidebar"
        >
          <div className="navbar-nav ">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/">
              About
            </Link>
            <Link className="nav-link" to="/">
              Features
            </Link>
            <Link className="nav-link" to="/">
              Pricing
            </Link>
            <Link className="nav-link" to="/">
              Contact
            </Link>
          </div>
          {hideAuthBtns && (
            <div className="sidebar_auth_btns">
              <Link className="btn auth_btn login_btn" to="/login">
                Login
              </Link>
              <Link
                className="btn auth_btn btn-light register_btn"
                to="/signup"
              >
                Register
              </Link>
            </div>
          )}
        </div>
        {/* You can add additional classes or styles to adjust the layout */}
        <div className="nav-btns">
          {!hideAuthBtns && (
            <>
              <Link className="btn login_btn" to="/login">
                Login
              </Link>
              <Link className="btn btn-light register_btn" to="/signup">
                Register
              </Link>
            </>
          )}

          <button
            className="navbar-toggler"
            onClick={toggleSidebar} // Toggle the sidebar when the menu button is clicked
          >
            {toggleNavbar ? (
              <CloseIcon className="navbar-togglerIcon" />
            ) : (
              <MenuIcon className="navbar-togglerIcon" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

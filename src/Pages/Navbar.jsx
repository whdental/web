import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import "font-awesome/css/font-awesome.min.css";
import "./Navbar.css";
import logoImage from "./images/newImages/whds-logo.png";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 950) {
        setActive(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileMenu = () => {
    setActive(false);
  };
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <HashLink to="/#home">
            <img src={logoImage} alt="whds" />
          </HashLink>
          <h3>WHEATLEY HILL DENTAL SURGERY</h3>
        </div>
        <div className={isActive ? "active_links" : "links"}>
          <div className="MenuItems">
            <HashLink to="/#home" onClick={closeMobileMenu}>
              Home
            </HashLink>
          </div>
          <div className="MenuItems">
            <HashLink to="/#about-doctors" onClick={closeMobileMenu}>
              About
            </HashLink>
          </div>
          <div className="MenuItems">
            <HashLink to="/#our-services" onClick={closeMobileMenu}>
              Treatments
            </HashLink>
          </div>
          <div className="MenuItems">
            <HashLink to="/#our-team" onClick={closeMobileMenu}>
              Our Team
            </HashLink>
          </div>
          <div className="MenuItems">
            <HashLink to="/#contact-us" onClick={closeMobileMenu}>
              Contact
            </HashLink>
          </div>
          <div className="MenuItems bgMenu" id="Appointment_menu">
            <HashLink
              /* to="https://portal.interbacs.com/Signup/WheatleyHillDentalSurgery" */
              to="/#home"
              target="_blank"
            >
              Join Us
            </HashLink>
          </div>
        </div>
        <div className="toggle_menu_icons" onClick={handleClick}>
          <i className={isActive ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;

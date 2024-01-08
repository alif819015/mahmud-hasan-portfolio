/* eslint-disable no-unused-vars */
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  const navMenu = (
    <ul className="md:flex gap-4 text-lg font-semibold">
      <li>
        <Link to="home" smooth={true} duration={1000} onClick={handleNavClick}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={1000} onClick={handleNavClick}>
          About
        </Link>
      </li>
      <li>
        <Link to="skill" smooth={true} duration={1000} onClick={handleNavClick}>
          Skill
        </Link>
      </li>
      <li>
        <Link
          to="project"
          smooth={true}
          duration={1000}
          onClick={handleNavClick}
        >
          Project
        </Link>
      </li>
      <li>
        <Link
          to="contract"
          smooth={true}
          duration={1000}
          onClick={handleNavClick}
        >
          Contract
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="navbar md:fixed z-10 text-white xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="navbar-start">
        <div className="dropdown absolute -top-10 lg:hidden">
          <label tabIndex={0} className="btn btn-ghost"></label>
          <Hamburger toggled={isOpen} toggle={setOpen} distance="sm" />
          {isOpen && (
            <ul className="p-2 shadow-purple-200 menu dropdown-content z-[1] bg-[#da08a2] rounded-box w-auto">
              {navMenu}
            </ul>
          )}
        </div>
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className="fontStyle btn-ghost normal-case text-2xl hidden lg:flex"
          onClick={handleNavClick}
        >
          P<span className="text-[#da08a2]">o</span>rtf
          <span className="text-[#da08a2]">o</span>li
          <span className="text-[#da08a2]">o</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul>{navMenu}</ul>
      </div>
    </div>
  );
};

export default NavBar;

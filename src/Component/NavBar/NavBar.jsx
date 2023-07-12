import Hamburger from 'hamburger-react';
import { useState } from 'react';
import './NavBar.css';


const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const navMenu = (
    <ul className="md:flex gap-4 text-lg font-semibold">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skill">Skill</a>
      </li>
      <li>
        <a href="#project">Project</a>
      </li>
      <li>
        <a href="#contract">Contract</a>
      </li>
    </ul>
  );

  return (
    <div className="navbar md:fixed z-10 text-white xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="navbar-start">
        <div className="dropdown absolute -top-10 lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            
          </label>
          <Hamburger toggled={isOpen} toggle={setOpen} distance="sm" />
          {isOpen && (
            <ul className="p-2 shadow-purple-200 menu dropdown-content z-[1] bg-[#da08a2] rounded-box w-auto">
              {navMenu}
            </ul>
          )}
        </div>
        <a href="#" className="fontStyle btn-ghost normal-case text-2xl hidden lg:flex">
          P<span className="text-[#da08a2]">o</span>rtf<span className="text-[#da08a2]">o</span>li<span className="text-[#da08a2]">o</span>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul>{navMenu}</ul>
      </div>
    </div>
  );
};

export default NavBar;

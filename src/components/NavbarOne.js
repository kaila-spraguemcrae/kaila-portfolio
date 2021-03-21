import React from 'react';
import { Link } from "react-scroll";

const NavBarOne = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <Link 
            activeClass="active" 
            to="about-me"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>About Me</Link>
          <Link 
            activeClass="active" 
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>Projects</Link>
        </ul>
      </nav>
    </>
  );
}

export default NavBarOne;
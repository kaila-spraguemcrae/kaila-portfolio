import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = ({handleToggle}) => {

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>{window.innerWidth < 400 ? 'KSM' : 'KAILA SPRAGUE MCRAE'}</NavLogo>
          <MobileIcon onClick={handleToggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/resume">Resume</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  )
}


export default Navbar

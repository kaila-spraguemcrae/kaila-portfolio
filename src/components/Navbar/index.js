import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavPDF,
  NavPDFWrapper,
} from "./NavbarElements";
import Resume_KailaSpragueMcRae from "../../assets/files/Resume_KailaSpragueMcRae.pdf";

const Navbar = ({ handleToggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            {window.innerWidth < 400 ? "KSM" : "KAILA SPRAGUE MCRAE"}
          </NavLogo>
          <MobileIcon onClick={handleToggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth>
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" smooth>
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavPDFWrapper>
                <NavPDF href={Resume_KailaSpragueMcRae} target="_blank">
                  Resume
                </NavPDF>
              </NavPDFWrapper>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/resume">Resume</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen, handleToggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={handleToggle}>
      <Icon onClick={handleToggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={handleToggle}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={handleToggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="contact" onClick={handleToggle}>
            Contact
          </SidebarLink>
          {/* <SideBtnWrap>
            <SidebarRoute to="/resume">Resume</SidebarRoute>
          </SideBtnWrap> */}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">
            About
          </SidebarLink>
          <SidebarLink to="projects">
            Projects
          </SidebarLink>
          <SidebarLink to="contact">
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

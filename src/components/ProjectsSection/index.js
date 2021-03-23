import React from 'react'
import { ProjectsContainer, ProjHeading, ProjectsWrapper, ProjectsCard, ProjectsImg, ProjectTitile } from './ProjectsElements';
import { proj1, proj2, proj3 } from './Data';

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjHeading>Projects</ProjHeading>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsImg src={proj1.img}/>
          <ProjectTitile>{proj1.title}</ProjectTitile>
          {/* <ProjectButton></ProjectButton> */}
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={proj2.img}/>
          <ProjectTitile>{proj2.title}</ProjectTitile>
          {/* <ProjectButton></ProjectButton> */}
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={proj3.img}/>
          <ProjectTitile>{proj3.title}</ProjectTitile>
          {/* <ProjectButton></ProjectButton> */}
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects

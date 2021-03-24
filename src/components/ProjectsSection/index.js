import React from 'react'
import { ProjectsContainer, ProjHeading, ProjectsWrapper, ProjectsCard, ProjectsImg, ProjectTitle, ProjectInfo } from './ProjectsElements';
import { proj1, proj2, proj3 } from './Data';

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjHeading>Projects</ProjHeading>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsImg src={proj1.img}/>
          <ProjectTitle>{proj1.title}</ProjectTitle>
          {/* <ProjectButton></ProjectButton> */}
          <ProjectInfo>{proj1.info}</ProjectInfo>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={proj2.img}/>
          <ProjectTitle>{proj2.title}</ProjectTitle>
          {/* <ProjectButton></ProjectButton> */}
          <ProjectInfo>{proj2.info}</ProjectInfo>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={proj3.img}/>
          <ProjectTitle>{proj3.title}</ProjectTitle>
          {/* <ProjectButton></ProjectButton> */}
          <ProjectInfo>{proj3.info}</ProjectInfo>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects

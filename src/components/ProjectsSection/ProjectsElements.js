import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  height: 860px;
  width: 100%
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #557B21;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and mac-width: 480px) {
    height: 1300px;
  }
`

export const ProjectsWrapper = styled.div`
  margin: 0 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ProjectsCard = styled.div`
  background: #fff;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  max-width: 500px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ProjectsImg = styled.img`
  height: 160px;
  width: auto;
  margin-bottom: 10px
`

export const ProjHeading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 0 0 24px 48px;
  line-height: 1.1;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ProjectTitile = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`

export const ProjectInfo = styled.p`
  font-size: 1rem;
`
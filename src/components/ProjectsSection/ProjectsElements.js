import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  background: #617941;
  padding-top: 10%;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const ProjectsWrapper = styled.div`
  height: 860px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 1050px;
  }
`

export const ProjWrapper = styled.div`
  margin: 0 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  justify-content: center;

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin: auto;
  }
`

export const ProjectsCard = styled.div`
  background: #97AB6E;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  max-width: 380px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    max-width: 300px;
    padding: 0;
  }
`

export const ProjectsImg = styled.img`
  height: 160px;
  width: auto;
  margin-bottom: 10px;
  border-radius: 2%;
`

export const ProjHeading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 24px 5%;
  line-height: 1.1;
  color: #00000;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const ProjectTitle = styled.h2`
  font-family: 'Jura', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
`

export const ProjectInfo = styled.p`
  font-family: 'Jura', sans-serif;
  font-size: 1rem;
  color: #fff;
`
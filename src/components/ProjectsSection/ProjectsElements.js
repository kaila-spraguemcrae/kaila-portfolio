import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom"; (for resume link)

export const ProjectsContainer = styled.div`
  background: #617941;
  padding-top: 10%;

  @media screen and (max-width: 768px) {
    padding: 75px 0 190px 0;
  }

  @media screen and (max-width: 500px) {
    padding: 110px 0 100px 0;
  }

  @media screen and (max-width: 1171px) {
    height: 1050px;
  }
`;

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
`;

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
`;

export const ProjectsCard = styled.a`
  text-decoration: none;
  background: #97ab6e;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  max-width: 380px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  color: black;
  filter: drop-shadow(-5px 5px 1px #354239);

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    filter: drop-shadow(-5px 5px 6px #354239);
  }

  @media screen and (max-width: 500px) {
    max-width: 325px;
    padding: 10px 0 0 0;
  }
`;

export const ProjectsImg = styled.img`
  height: 160px;
  width: auto;
  margin-bottom: 10px;
  border-radius: 2%;
`;

export const ProjHeading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 54px 5%;
  line-height: 1.1;
  color: #00000;

  @media screen and (max-width: 768px) {
    margin: 5%;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    margin: 5%;
  }
`;

export const ProjectTitle = styled.h2`
  font-family: "Jura", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #00000;

  @media screen and (max-width: 768px) {
    margin: 5% 0 0 0;
  }
`;

export const ProjectInfo = styled.p`
  font-family: "Jura", sans-serif;
  font-size: 1rem;
  color: #00000;

  @media screen and (max-width: 768px) {
    margin: 3% 2% 5% 2%;
  }
`;

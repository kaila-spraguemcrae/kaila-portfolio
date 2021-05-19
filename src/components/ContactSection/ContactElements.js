import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 560px;
  padding-top: 10%;

  @media screen and (max-width: 768px) {
    padding: 75px 0 0 0;
  }

  @media screen and (max-width: 500px) {
    padding: 75px 0 0 0;
  }
`;

export const ContactHeading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 5% 24px 5%;
  line-height: 1.1;
  color: #00000;
  text-align: center;

  @media screen and (max-widthl 480px) {
    font-size: 32px;
  }
`;

export const ContactWrapper = styled.div`
  margin: 8% 5% 24px 5%;
  text-align: center;
`;

export const ContactItem = styled.a`
  text-decoration: none;
  color: black;
  margin-bottom: 15px;
  padding: 0 15px;
  display: inline-block;
  text-align: center;
`;

export const ContactText = styled.h2`
  max-width: 440px;
  margin-bottom: 35px;
  margin-left: 10px;
  font-size: 1.5rem;
  line-height: 24px;
  font-family: "Jura", sans-serif;
  display: inline;
  text-align: center;
  align-items: center;
`;

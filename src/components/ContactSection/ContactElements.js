import styled from 'styled-components';

export const ContactContainer = styled.div`
  height: 860px;
  padding-top: 10%;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const ContactHeading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 0 0 24px 5%;
  line-height: 1.1;
  color: #fff;

  @media screen and (max-widthL 480px) {
    font-size: 32px;
  }
`

export const ContactWrapper = styled.div`
  margin: 0 10%;
  align-items: center;
  padding: 0 50px;

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

export const ContactItem = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const ContactText = styled.h2`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.5rem;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
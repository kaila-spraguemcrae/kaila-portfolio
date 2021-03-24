import styled from 'styled-components';

export const ContactContainer = styled.div`
  height: 860px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const ContactHeading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 24px;
  line-height: 1.1;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-widthL 480px) {
    font-size: 32px;
  }
`

export const ContactWrapper = styled.div`
  margin: 0 10%;
  display: grid;

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

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const Column3 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const Contact1 = styled.h2`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.5rem;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
export const Contact2 = styled.h2`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.5rem;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
export const Contact3 = styled.h2`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.5rem;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
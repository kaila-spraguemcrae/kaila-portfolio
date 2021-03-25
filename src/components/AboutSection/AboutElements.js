import styled from 'styled-components';
// import { proj1, proj2, proj3 } from './Data';

export const AboutContainer = styled.div`
  background: '#97AB6D';

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 980px;
  }
`

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';
  
  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2'
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

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 24px;
  line-height: 1.1;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Paragraph = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  font-family: 'Jura', sans-serif;
  color: '#fff';
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img`
  width: 80%;
  border-radius: 50%;
  border: 20px solid #617940;
`
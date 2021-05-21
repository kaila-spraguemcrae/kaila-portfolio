import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  TextWrapper,
  Heading,
  Paragraph,
  Column2,
  Column1,
  ImgWrap,
  Img,
} from "./AboutElements";

const AboutSection = ({
  lightBg,
  id,
  imgStart,
  img,
  alt,
  lightText,
  heading,
  paragraph1,
  paragraph2,
  paragraph3,
  darkText,
}) => {
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{heading}</Heading>
                <Paragraph darkText={darkText}>{paragraph1}</Paragraph>
                <Paragraph darkText={darkText}>{paragraph2}</Paragraph>
                <Paragraph darkText={darkText}>{paragraph3}</Paragraph>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
                {/* <Img2 src={img2}/> */}
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;

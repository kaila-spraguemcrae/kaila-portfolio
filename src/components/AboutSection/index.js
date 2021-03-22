import React from 'react'
import {AboutContainer, AboutWrapper, AboutRow, TextWrapper, Heading, Paragraph, Column2, Column1, ImgWrap, Img} from './AboutElements'

const AboutSection = () => {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <Heading>Heading</Heading>
                <Paragraph>Content</Paragraph>
                {/* <MePhoto></MePhoto> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default AboutSection

import React from 'react'
import { ContactContainer, ContactHeading, ContactWrapper, Column1, Column2, Column3, TextWrapper, Contact1, Contact2, Contact3, ContactRow } from './ContactElements';


const ContactSection = () => {
  return (
    <ContactContainer>
      <ContactHeading/>
      <ContactWrapper>
        <ContactRow>
          <Column1>
            <TextWrapper>
              <Contact1>GitHub</Contact1>
              {/* <Icon></Icon> */}
            </TextWrapper>
          </Column1>
          <Column2>
            <TextWrapper>
              <Contact2>LinkedIn</Contact2>
              {/* <Icon></Icon> */}
            </TextWrapper>
          </Column2>
          <Column3>
            <TextWrapper>
              <Contact3>Email</Contact3>
              {/* <Icon></Icon> */}
            </TextWrapper>
          </Column3>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default ContactSection

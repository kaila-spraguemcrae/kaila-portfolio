import React from 'react'
import { ContactContainer, ContactHeading, ContactWrapper, ContactItem, TextWrapper, ContactText, ContactRow } from './ContactElements';


const ContactSection = () => {
  return (
    <ContactContainer id='content'>
      <ContactHeading>Contact</ContactHeading>
      <ContactWrapper>
        <ContactItem>
          <ContactText>GitHub</ContactText>
          {/* <Icon></Icon> */}
        </ContactItem>
        <ContactItem>
          <ContactText>LinkedIn</ContactText>
          {/* <Icon></Icon> */}
        </ContactItem>
        <ContactItem>
          <ContactText>Email</ContactText>
          {/* <Icon></Icon> */}
        </ContactItem>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default ContactSection

import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';
import { ContactContainer, ContactHeading, ContactWrapper, ContactItem, ContactText } from './ContactElements';


const ContactSection = () => {
  return (
    <ContactContainer id='contact'>
      <ContactHeading>Contact</ContactHeading>
      <ContactWrapper>
        <ContactItem>
          <FaGithub/>
          <ContactText>GitHub</ContactText>
          {/* <Icon></Icon> */}
        </ContactItem>
        <ContactItem>
          <FaLinkedin/>
          <ContactText>LinkedIn</ContactText>
          {/* <Icon></Icon> */}
        </ContactItem>
        <ContactItem>
          <FiMail/>
          <ContactText>Email</ContactText>
          {/* <Icon></Icon> */}
        </ContactItem>
      </ContactWrapper>
    </ContactContainer>
  )
}

export default ContactSection

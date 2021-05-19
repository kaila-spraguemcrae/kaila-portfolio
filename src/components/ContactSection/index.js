import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  ContactContainer,
  ContactHeading,
  ContactWrapper,
  ContactItem,
  ContactText,
} from "./ContactElements";

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <ContactHeading>Contact</ContactHeading>
      <ContactWrapper>
        <ContactItem
          href="https://github.com/kaila-spraguemcrae"
          target="_blank"
        >
          <FaGithub />
          <ContactText>GitHub</ContactText>
          {/* <Icon></Icon> */}
        </ContactItem>
        <ContactItem
          href="https://www.linkedin.com/in/kaila-sprague-mcrae/"
          target="_blank"
        >
          <FaLinkedin />
          <ContactText>LinkedIn</ContactText>
          {/* <Icon></Icon> */}
        </ContactItem>
        <ContactItem href="mailto:kaila.sprague@icloud.com" target="_blank">
          <FiMail />
          <ContactText>Email</ContactText>
          {/* <Icon></Icon> */}
        </ContactItem>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactSection;

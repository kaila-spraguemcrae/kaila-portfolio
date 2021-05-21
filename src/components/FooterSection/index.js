import React from "react";
import { FooterText, Source } from "./FooterElements";

const Footer = () => {
  const text = "Kaila Sprague McRae | ";
  return (
    <div>
      <FooterText>
        {text}
        <Source
          href="https://github.com/kaila-spraguemcrae/kaila-portfolio"
          target="_blank"
        >
          source
        </Source>
      </FooterText>
    </div>
  );
};

export default Footer;

import React from "react";
import { FooterText, Source } from "./FooterElements";

const Footer = () => {
  return (
    <div>
      <FooterText>
        Kaila Sprague McRae |{" "}
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

// Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Section = styled.div`
  text-align: center;
  flex: 1;
  margin: 10px 0;

  @media (min-width: 768px) {
    max-width: 30%; /* Adjust the percentage based on your design preference */
  }
`;

const AddressSection = styled(Section)``;

const NavigationSection = styled(Section)`
  display: flex;
  flex-direction: column;

  a {
    color: #fff;
    text-decoration: none;
    margin: 5px 0;
  }
`;

const SocialSection = styled(Section)`
  img {
    width: 30px;
    margin: 0 10px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <AddressSection>
        <p>Your Company Name</p>
        <p>123 Street, City, Country</p>
      </AddressSection>

      <NavigationSection>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about">About Us</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </NavigationSection>

      <SocialSection>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="path/to/twitter-icon.png" alt="Twitter" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="path/to/facebook-icon.png" alt="Facebook" />
        </a>
        <a
          href="mailto:your.email@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="path/to/gmail-icon.png" alt="Gmail" />
        </a>
      </SocialSection>
    </FooterContainer>
  );
};

export default Footer;
